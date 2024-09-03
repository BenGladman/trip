import { Vector3 } from 'three';
import { getWorldImageData } from './getWorldImageData';

// adapted from https://github.com/jessehhydee/threejs-globe/blob/main/index.js

const dotSphereRadius = 20;
const dotDensity = 2.5;
const edgeFraction = 0.6;

function radiansPerDot(lat: number) {
  const radius = Math.cos(lat) * dotSphereRadius;
  const circumference = radius * Math.PI * 2;
  const dotsForRadius = Math.max(1, circumference * dotDensity);
  return (Math.PI * 2) / dotsForRadius;
}

export async function getDots() {
  const imageData = await getWorldImageData();

  const latStep = radiansPerDot(0);

  const latToY = (lat: number) => {
    return Math.round((Math.PI / 2 - lat) * (imageData.height / Math.PI));
  };

  const lonToX = (lon: number) => {
    return Math.round((lon + Math.PI) * (imageData.width / (2 * Math.PI)));
  };

  const visibilityForCoordinate = (
    lon: number,
    lonStep: number,
    lat: number,
  ) => {
    const y1 = latToY(lat);
    const y2 = Math.max(y1 + 1, latToY(lat - latStep));

    const x1 = lonToX(lon);
    const x2 = Math.max(x1 + 1, lonToX(lon + lonStep));

    let countLand = 0;
    let countAll = 0;

    for (let y = y1; y < y2; y += 1) {
      for (let x = x1; x < x2; x += 1) {
        countAll += 1;

        const dataIndex = (y * imageData.width + x) * 4;

        if (imageData.data[dataIndex] < 20) {
          countLand += 1;
        }
      }
    }

    return countLand / countAll > edgeFraction;
  };

  const calcPosFromLatLon = (lon: number, lat: number) => {
    const phi = Math.PI / 2 - lat;
    const theta = lon;

    const x = -(dotSphereRadius * Math.sin(phi) * Math.cos(theta));
    const z = dotSphereRadius * Math.sin(phi) * Math.sin(theta);
    const y = dotSphereRadius * Math.cos(phi);

    return new Vector3(x, y, z);
  };

  const dots: Vector3[] = [];

  for (let lat = -Math.PI / 2; lat < Math.PI / 2; lat += latStep) {
    const lonStep = radiansPerDot(lat);

    for (let lon = -Math.PI; lon < Math.PI; lon += lonStep) {
      if (visibilityForCoordinate(lon, lonStep, lat)) {
        dots.push(calcPosFromLatLon(lon + lonStep / 2, lat - latStep / 2));
      }
    }
  }

  return dots;
}

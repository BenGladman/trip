export async function getWorldImageData(imagePath: string): Promise<ImageData> {
  const imageData = await new Promise<ImageData>((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      const imageCanvas = document.createElement('canvas');
      imageCanvas.width = image.width;
      imageCanvas.height = image.height;

      const context = imageCanvas.getContext('2d');
      if (!context) {
        reject(new Error('No canvas context'));
        return;
      }

      context.drawImage(image, 0, 0);

      const imageData = context.getImageData(
        0,
        0,
        imageCanvas.width,
        imageCanvas.height,
      );

      resolve(imageData);
    };

    image.onerror = () => reject(new Error('Failed to load world image'));

    setTimeout(() => reject(new Error('World image load timed out')), 5000);

    image.src = imagePath;
  });

  return imageData;
}

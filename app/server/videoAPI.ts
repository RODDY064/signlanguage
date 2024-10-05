const uploadVideoToExternalAPI = async (video: File | null, id: string): Promise<string | null> => {
    if (!video) {
      throw new Error('No video file provided');
    }
  
    // Read the video file as an ArrayBuffer
    const data = await video.arrayBuffer();
  
    // Create a FormData and append the video file and additional data
    const formData = new FormData();
    formData.append('file', new Blob([data], { type: video.type }), `${id}.mp4`);
    formData.append('name', id); // Use the id as the video name
  
    // console.log(formData.get('file'),'file');
    
    try {
      // Send the video to another API
      const response = await fetch('https://videos.vskuul.com/api/files', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
  
      console.log(result);
  
      if (!response.ok) {
        throw new Error(result.message || 'Error uploading video to another API');
      }
  
      // Return the video name from the response
      return result.message;
    } catch (error) {
      console.error('Error uploading video to another API:', error);
      return null;
    }
  };
  
  export { uploadVideoToExternalAPI };
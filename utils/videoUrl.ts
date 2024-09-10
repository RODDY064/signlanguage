  export function formatVideoId(videoId: string): string {
    const formatted = videoId
      .toLowerCase()
      .replace(/mvi/, 'Mvi') 
      .replace('_', ' '); 
    
      return `${formatted}.mp4`;
  }
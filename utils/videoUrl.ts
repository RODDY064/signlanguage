  export function formatVideoId(videoId: string): string {
    if(!videoId){
      return ""
    }
    const formatted = videoId
      .toLowerCase()
      .replace(/mvi/, 'Mvi') 
      .replace('_', ' '); 
    
      return `${formatted}.mp4`;
  }
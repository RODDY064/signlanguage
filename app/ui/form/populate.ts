"use server"

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function createVideos() {
    try {
      const video = await prisma.video.createMany({
        data: [
            { video_url: "MVI_3997", video_name: "Mental" },
            { video_url: "MVI_3998", video_name: "Disabled" },
            { video_url: "MVI_3999", video_name: "Crippled" },
            { video_url: "MVI_4000", video_name: "Hospital" },
            { video_url: "MVI_4001", video_name: "Surgery" },
            { video_url: "MVI_4002", video_name: "Sex" },
            { video_url: "MVI_4003", video_name: "Gender" },
            { video_url: "MVI_4004", video_name: "Lesbian" },
            { video_url: "MVI_4005", video_name: "Semen" },
            { video_url: "MVI_4006", video_name: "Semen" },
            { video_url: "MVI_4007", video_name: "Erection" },
            { video_url: "MVI_4008", video_name: "Condom" },
            { video_url: "MVI_4010", video_name: "Vaginal fluid" },
            { video_url: "MVI_4011", video_name: "Menstruation" },
            { video_url: "MVI_4012", video_name: "Pregnant" },
            { video_url: "MVI_4013", video_name: "Birth" },
            { video_url: "MVI_4014", video_name: "Breastfeed" },
            { video_url: "MVI_4015", video_name: "Female circumcision" },
            { video_url: "MVI_4016", video_name: "Female masturbation" },
            { video_url: "MVI_4017", video_name: "Female masturbation" },
            { video_url: "MVI_4018", video_name: "Abortion" },
            { video_url: "MVI_4019", video_name: "Smoking" },
            { video_url: "MVI_4020", video_name: "Woe" },
            { video_url: "MVI_4021", video_name: "Medicine" },
            { video_url: "MVI_4022", video_name: "Danger" },
            { video_url: "MVI_4023", video_name: "Danger" },
            { video_url: "MVI_4024", video_name: "Emergency" },
            { video_url: "MVI_4025", video_name: "Challenge Authority" },
            { video_url: "MVI_4027", video_name: "Curious" },
            { video_url: "MVI_4028", video_name: "Being idle" },
            { video_url: "MVI_4029", video_name: "Inactive" },
            { video_url: "MVI_4030", video_name: "You're funny" },
            { video_url: "MVI_4031", video_name: "Let down" },
            { video_url: "MVI_4032", video_name: "You're funny" },
            { video_url: "MVI_4034", video_name: "Low intelligence" },
            { video_url: "MVI_4035", video_name: "Drunk" },
            { video_url: "MVI_4037", video_name: "Difficult to change" },
            { video_url: "MVI_4038", video_name: "Heart beating fast" },
            { video_url: "MVI_4040", video_name: "Hearing is dead" },
            { video_url: "MVI_4044", video_name: "Toothless" },
            { video_url: "MVI_4045", video_name: "Shaved head" },
            { video_url: "MVI_4046", video_name: "Big butt" },
            { video_url: "MVI_4048", video_name: "Locality" },
            { video_url: "MVI_4049", video_name: "Face to face" },
            { video_url: "MVI_4050", video_name: "Flirting" },
            { video_url: "MVI_4051", video_name: "I love you" },
            { video_url: "MVI_4052", video_name: "Easy talk" },
            { video_url: "MVI_4053", video_name: "Relieved" },
            { video_url: "MVI_4055", video_name: "Smelling something good" },
            { video_url: "MVI_4056", video_name: "Variety of things" },
            { video_url: "MVI_4057", video_name: "Pick somebody" },
            { video_url: "MVI_4058", video_name: "Force to join" },
            { video_url: "MVI_4059", video_name: "Spread information" },
          ],
      });
  
    // const video = await prisma.video.deleteMany({})

      console.log(video)
    } catch (error) {
      console.log(error);
    }
  }



  
  
  
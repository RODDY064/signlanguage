"use server"

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function createVideos() {
    try {
      const video = await prisma.video.createMany({
        data: [
          { video_url: "MVI_4125", video_name: "Scream"},
          {video_url: "MVI_4126",video_name: "Emotion"
          },
          {video_url: "MVI_4127",video_name: "Sad"
          },
          {video_url: "MVI_4128",video_name: "Angry"
          },
          {video_url: "MVI_4129",video_name: "Fear"
          },
          {video_url: "MVI_4130",video_name: "Disappointed "
          },
          {video_url: "MVI_4131",video_name: "Frustrate "
          },
          {video_url: "MVI_4132",video_name: "Jealous"
          },
          {video_url: "MVI_4133",video_name: "Lonely"
          },
          {video_url: "MVI_4134",video_name: "Lonely"
          },
          {video_url: "MVI_4135",video_name: "Nervous"
          },
          {video_url: "MVI_4136",video_name: "Worry"
          },
          {video_url: "MVI_4137",video_name: "Hate"
          },
          {video_url: "MVI_4138",video_name: "Desire"
          },
          {video_url: "MVI_4139",video_name: "Desire"
          },
          {video_url: "MVI_4140",video_name: "Hurt"
          },
          {video_url: "MVI_4141",video_name: "Character"
          },
          {video_url: "MVI_4142",video_name: "Best"
          },
          {video_url: "MVI_4145",video_name: "Important"
          },
          {video_url: "MVI_4146",video_name: "Boast"
          },
          {video_url: "MVI_4147",video_name: "Fair"
          },
          {video_url: "MVI_4148",video_name: "Funny"
          },
          {video_url: "MVI_4149",video_name: "Funny"
          },
          {video_url: "MVI_4150",video_name: "Humble"
          },
          {video_url: "MVI_4151",video_name: "Kind"
          },
          {video_url: "MVI_4152",video_name: "Lucky"
          },
          {video_url: "MVI_4154",video_name: "Lazy"
          },
          {video_url: "MVI_4155",video_name: "Patient"
          },
          {video_url: "MVI_4156",video_name: "Proud"
          },
          {video_url: "MVI_4157",video_name: "Respect"
          },
          {video_url: "MVI_4158",video_name: "Selfish"
          },
          {video_url: "MVI_4159",video_name: "Stubborn"
          },
          {video_url: "MVI_4160",video_name: "Stupid"
          },
          {video_url: "MVI_4161",video_name: "Wicked"
          },
          {video_url: "MVI_4163",video_name: "Vain"
          },
          {video_url: "MVI_4164",video_name: "Wise"
          },
          {video_url: "MVI_4166",video_name: "Strict"
          },
          {video_url: "MVI_4168",video_name: "Embarrased"
          },
          {video_url: "MVI_4169",video_name: "Creative"
          },
          {video_url: "MVI_4170",video_name: "Apologize"
          },
          {video_url: "MVI_4175",video_name: "Why are you here"
          },
          {video_url: "MVI_4176",video_name: "Why are you here"
          },
          {video_url: "MVI_4177",video_name: "Show me where the pain begins and where it ends"
          },
          {video_url: "MVI_4178",video_name: "Show me where the pain begins and where it ends"
          },
          {video_url: "MVI_4179",video_name: "How long have you had the pain"
          },
          {video_url: "MVI_4180",video_name: "How long have you had the pain"
          },
          {video_url: "MVI_4181",video_name: "Why do you think you have the pain"
          },
          {video_url: "MVI_4182",video_name: "Why do you think you have the pain"
          },
          {video_url: "MVI_4183",video_name: "I have a terrible pain right here"
          },
          {video_url: "MVI_4184",video_name: "I have a terrible pain right here"
          },
          {video_url: "MVI_4185",video_name: "I have had the pain for about fifteen minutes"
          },
          {video_url: "MVI_4187",video_name: "I have had the pain for about fifteen minutes"
          },
          {video_url: "MVI_4189",video_name: "About three days"
          },
          {video_url: "MVI_4190",video_name: "About three days"
          },
          {video_url: "MVI_4192",video_name: "It has been coming and going for five weeks"
          },
          {video_url: "MVI_4193",video_name: "It has been coming and going for five weeks"
          },
          {video_url: "MVI_4194",video_name: "I think it is an old injury coming back"
          },
          {video_url: "MVI_4195",video_name: "I think it is an old injury coming back"
          },
          {video_url: "MVI_4197",video_name: "I bumped myself but not very hard"
          },
          {video_url: "MVI_4198",video_name: "You are the doctor you tell me"
          },
          {video_url: "MVI_4199",video_name: "You are the doctor you tell me"
          },
          {video_url: "MVI_4200",video_name: "What were you doing when the pain began"
          },
          {video_url: "MVI_4201",video_name: "What were you doing when the pain began"
          },
          {video_url: "MVI_4202",video_name: "Is the pain dull or sharp"
          },
          {video_url: "MVI_4203",video_name: "Is the pain dull or sharp"
          },
          {video_url: "MVI_4204",video_name: "How long does your pain last"
          },
          {video_url: "MVI_4205",video_name: "How long does your pain last"
          },
          {video_url: "MVI_4208",video_name: "Do you have cramping to abdominal pain"
          },
          {video_url: "MVI_4209",video_name: "Do you have cramping to abdominal pain"
          },
          {video_url: "MVI_4214",video_name: "I was bending over to pick up something"
          },
          {video_url: "MVI_4215",video_name: "I was bending over to pick up something"
          },
          {video_url: "MVI_4216",video_name: "I woke up and the pain was there"
          },
          {video_url: "MVI_4217",video_name: "I woke up and the pain was there"
          },
          {video_url: "MVI_4218",video_name: "I was standing when the pain came"
          },
          {video_url: "MVI_4219",video_name: "I was standing when the pain came"
          },
          {video_url: "MVI_4220",video_name: "I was sitting down at work and the pain came"
          },
          {video_url: "MVI_4221",video_name: "I was sitting down at work and the pain came"
          },
          {video_url: "MVI_4225",video_name: "I was walking and the pain began when I started running "
          },
          {video_url: "MVI_4226",video_name: "I was walking and the pain began when I started running "
          },
          {video_url: "MVI_4227",video_name: "No this is the first time"
          },
          {video_url: "MVI_4228",video_name: "No this is the first time"
          },
          {video_url: "MVI_4230",video_name: "Yes but it was different. It hurts more this time"
          },
          {video_url: "MVI_4232",video_name: "Yes but it was different. It hurts more this time"
          },
          {video_url: "MVI_4236",video_name: "The pain is very sharp when I move my arm or breathe deeply"
          },
          {video_url: "MVI_4237",video_name: "The pain is very sharp when I move my arm or breathe deeply"
          },
          {video_url: "MVI_4242",video_name: "The pain is throbbing, heavy and constant"
          },
          {video_url: "MVI_4243",video_name: "The pain is throbbing, heavy and constant"
          },
          {video_url: "MVI_4244",video_name: "Several seconds"
          },
          {video_url: "MVI_4245",video_name: "Several seconds"
          },
          {video_url: "MVI_4246",video_name: "Thirty minutes"
          },
          {video_url: "MVI_4247",video_name: "Thirty minutes"
          },
          {video_url: "MVI_4249",video_name: "What relieves your pain"
          },
          {video_url: "MVI_4250",video_name: "What relieves your pain"
          },
          {video_url: "MVI_4251",video_name: "Does bowel movement relieve your pain"
          },
          {video_url: "MVI_4252",video_name: "Does bowel movement relieve your pain"
          },
          {video_url: "MVI_4257",video_name: "Do specific foods cause your pain"
          },
          {video_url: "MVI_4258",video_name: "Do specific foods cause your pain"
          },
          {video_url: "MVI_4259",video_name: "Do acidic foods cause discomfort"
          },
          {video_url: "MVI_4261",video_name: "Do acidic foods cause discomfort"
          },
          {video_url: "MVI_4262",video_name: "Standing is better"
          },
          {video_url: "MVI_4263",video_name: "Standing is better"
          },
          {video_url: "MVI_4265",video_name: "No matter what position I am in it still hurts"
          },
          {video_url: "MVI_4266",video_name: "No matter what position I am in it still hurts"
          },
          {video_url: "MVI_4267",video_name: "It is much worse"
          },
          {video_url: "MVI_4268",video_name: "It is much worse"
          },
          {video_url: "MVI_4269",video_name: "If I don’t eat anything I feel better"
          },
          {video_url: "MVI_4270",video_name: "If I don’t eat anything I feel better"
          },
          {video_url: "MVI_4271",video_name: "Yes orange juice causes me pain"
          },
          {video_url: "MVI_4272",video_name: "Yes orange juice causes me pain"
          },
          {video_url: "MVI_4273",video_name: "After I eat a meal it hurts"
          },
          {video_url: "MVI_4274",video_name: "After I eat a meal it hurts"
          },
          {video_url: "MVI_4275",video_name: "The pain is much worse in the morning"
          },
          {video_url: "MVI_4276",video_name: "The pain is much worse in the morning"
          },
          {video_url: "MVI_4278",video_name: "If I stand it hurts"
          },
          {video_url: "MVI_4279",video_name: "If I stand it hurts"
          },
          {video_url: "MVI_4280",video_name: "Yes my father and mother"
          },
          {video_url: "MVI_4281",video_name: "Yes my father and mother"
          },
          {video_url: "MVI_4282",video_name: "Yes both my brother and sister"
          },
          {video_url: "MVI_4283",video_name: "Yes both my brother and sister"
          },
          {video_url: "MVI_4285",video_name: "Yes my aunt and uncle"
          },
          {video_url: "MVI_4286",video_name: "Yes my aunt and uncle"
          },
          {video_url: "MVI_4290",video_name: "I hurt my neck in a car accident last month"
          },
          {video_url: "MVI_4291",video_name: "I hurt my neck in a car accident last month"
          },
          {video_url: "MVI_4293",video_name: "I fell about two weeks ago"
          },
          {video_url: "MVI_4294",video_name: "I fell about two weeks ago"
          },
          {video_url: "MVI_4295",video_name: "How did your car accident happen"
          },
          {video_url: "MVI_4296",video_name: "How did your car accident happen"
          },
          {video_url: "MVI_4298",video_name: "What is the last thing you remember"
          },
          {video_url: "MVI_4299",video_name: "What is the last thing you remember"
          },
          {video_url: "MVI_4301",video_name: "Where were you sitting in the car"
          },
          {video_url: "MVI_4302",video_name: "Where were you sitting in the car"
          },
          {video_url: "MVI_4303",video_name: "Did you strike your head"
          },
          {video_url: "MVI_4304",video_name: "Did you strike your head"
          },
          {video_url: "MVI_4305",video_name: "I cannot remember"
          },
          {video_url: "MVI_4306",video_name: "I cannot remember"
          },
          {video_url: "MVI_4312",video_name: "I lost control of the car and hit an animal"
          },
          {video_url: "MVI_4313",video_name: "I lost control of the car and hit an animal"
          },
          {video_url: "MVI_4314",video_name: "I fell asleep at the wheel"
          },
          {video_url: "MVI_4315",video_name: "I fell asleep at the wheel"
          },
          {video_url: "MVI_4316",video_name: "Yes I was wearing a seatbelt"
          },
          {video_url: "MVI_4317",video_name: "Yes I was wearing a seatbelt"
          },
          {video_url: "MVI_4322",video_name: "I was sitting infront beside the driver"
          },
          {video_url: "MVI_4323",video_name: "I was sitting infront beside the driver"
          },
          {video_url: "MVI_4324",video_name: "Do you have a headache now"
          },
          {video_url: "MVI_4325",video_name: "Do you have a headache now"
          },
          {video_url: "MVI_4326",video_name: "Does it hurt when I touch you here"
          },
          {video_url: "MVI_4327",video_name: "Does it hurt when I touch you here"
          },
          {video_url: "MVI_4328",video_name: "Tell me if it hurts"
          },
          {video_url: "MVI_4329",video_name: "Tell me if it hurts"
          },
          {video_url: "MVI_4332",video_name: "If I take a deep breath I feel a sudden pain"
          },
          {video_url: "MVI_4333",video_name: "If I take a deep breath I feel a sudden pain"
          },
          {video_url: "MVI_4334",video_name: "Yes it hurts"
          },
          {video_url: "MVI_4335",video_name: "Yes it hurts"
          },
          {video_url: "MVI_4336",video_name: "When did you fall"
          },
          {video_url: "MVI_4337",video_name: "When did you fall"
          },
          {video_url: "MVI_4338",video_name: "Did you land on a soft or hard surface"
          },
          {video_url: "MVI_4339",video_name: "Did you land on a soft or hard surface"
          },
          {video_url: "MVI_4343",video_name: "Which part of your body hit first"
          },
          {video_url: "MVI_4344",video_name: "Which part of your body hit first"
          },
          {video_url: "MVI_4345",video_name: "Can you walk around"
          },
          {video_url: "MVI_4346",video_name: "Can you walk around"
          },
          {video_url: "MVI_4347",video_name: "Can you move your fingers and toes"
          },
          {video_url: "MVI_4348",video_name: "Can you move your fingers and toes"
          },
          {video_url: "MVI_4349",video_name: "Hard concrete"
          },
          {video_url: "MVI_4350",video_name: "Hard concrete"
          },
          {video_url: "MVI_4351",video_name: "I landed on my elbow first"
          },
          {video_url: "MVI_4352",video_name: "I landed on my elbow first"
          },
          {video_url: "MVI_4353",video_name: "Yes I can walk around but it hurts"
          },
          {video_url: "MVI_4355",video_name: "Yes I can walk around but it hurts"
          },
          {video_url: "MVI_4356",video_name: "What caused your pain"
          },
          {video_url: "MVI_4357",video_name: "What caused your pain"
          },
          {video_url: "MVI_4358",video_name: "Since when"
          },
          {video_url: "MVI_4359",video_name: "Since when"
          },
          {video_url: "MVI_4364",video_name: "Yes I have been coughing every morning"
          },
          {video_url: "MVI_4365",video_name: "Yes I have been coughing every morning"
          },
          {video_url: "MVI_4368",video_name: "Yes hay fever"
          },
          {video_url: "MVI_4369",video_name: "Yes hay fever"
          },
          {video_url: "MVI_4372",video_name: "Are there any medcines you cannot take"
          },
          {video_url: "MVI_4373",video_name: "Are there any medcines you cannot take"
          },
          {video_url: "MVI_4375",video_name: "I get stomach cramps and vomit"
          },
          {video_url: "MVI_4376",video_name: "I get stomach cramps and vomit"
          },
          {video_url: "MVI_4377",video_name: "What is your name"
          },
          {video_url: "MVI_4378",video_name: "What is your name"
          },
          {video_url: "MVI_4379",video_name: "Can you call a doctor"
          },
          {video_url: "MVI_4380",video_name: "Can you call a doctor"
          },
          {video_url: "MVI_4381",video_name: "Can you call my family"
          },
          {video_url: "MVI_4382",video_name: "Can you call my family"
          },
          {video_url: "MVI_4384",video_name: "Can I have more pain medications"
          },
          {video_url: "MVI_4385",video_name: "Can I have more pain medications"
          },
          {video_url: "MVI_4386",video_name: "When can I go home"
          },
          {video_url: "MVI_4387",video_name: "When can I go home"
          },
          {video_url: "MVI_4388",video_name: "Can you tell me where it hurts"
          },
          {video_url: "MVI_4390",video_name: "Can you tell me where it hurts"
          },
          {video_url: "MVI_4391",video_name: "How long have you been experiencing these symptoms"
          },
          {video_url: "MVI_4392",video_name: "How long have you been experiencing these symptoms"
          },
          {video_url: "MVI_4393",video_name: "The results of your tests are in. I need to discuss them with you"
          },
          {video_url: "MVI_4394",video_name: "The results of your tests are in. I need to discuss them with you"
          },
          {video_url: "MVI_4396",video_name: "We recommend you stay overnight for observation"
          },
          {video_url: "MVI_4397",video_name: "We recommend you stay overnight for observation"
          },
          {video_url: "MVI_4400",video_name: "You need to take this medication in the morning afternoon and evening"
          },
          {video_url: "MVI_4401",video_name: "You need to take this medication in the morning afternoon and evening"
          },
          {video_url: "MVI_4402",video_name: "I am a professional doctor"
          },
          {video_url: "MVI_4403",video_name: "I am a professional doctor"
          },
          {video_url: "MVI_4404",video_name: "Please take a deep breath"
          },
          {video_url: "MVI_4405",video_name: "Please take a deep breath"
          },
          {video_url: "MVI_4406",video_name: "I have a change in the size of my breast "
          },
          {video_url: "MVI_4407",video_name: "Fluids discharge from my nipples"
          },
          {video_url: "MVI_4408",video_name: "I have a rash on my skin"
          },
          {video_url: "MVI_4409",video_name: "I have a runny nose"
          },
          {video_url: "MVI_4410",video_name: "I cough a lot"
          },
          {video_url: "MVI_4411",video_name: "My head aches"
          },
          {video_url: "MVI_4413",video_name: "I feel pain when I pee"
          },
          {video_url: "MVI_4418",video_name: "There is unusual discharge from my private parts"
          },
          {video_url: "MVI_4419",video_name: "My eye itches"
          },
          {video_url: "MVI_4420",video_name: "My body itches"
          },
          {video_url: "MVI_4421",video_name: "I have been sneezing persistently "
          },
          {video_url: "MVI_4422",video_name: "I feel very thirsty "
          },
          {video_url: "MVI_4423",video_name: "I urinate frequently "
          },
          {video_url: "MVI_4424",video_name: "I feel tired"
          },
          {video_url: "MVI_4425",video_name: "My wounds heal slowly"
          },
          {video_url: "MVI_4426",video_name: "I have blurred vision"
          },
          {video_url: "MVI_4427",video_name: "I feel nausea"
          },
          {video_url: "MVI_4428",video_name: "I experience lack of appetite"
          },
          {video_url: "MVI_4429",video_name: "I cough out blood"
          },
          {video_url: "MVI_4430",video_name: "I feel very hot"
          },
          {video_url: "MVI_4431",video_name: "I sweat profusely "
          },
          {video_url: "MVI_4432",video_name: "I feel very cold"
          },
          {video_url: "MVI_4433",video_name: "I have pains in my muscle"
          },
          {video_url: "MVI_4434",video_name: "I have been vomitting "
          },
          {video_url: "MVI_4435",video_name: "I keep forgetting things"
          },
          {video_url: "MVI_4436",video_name: "My heart beats rapidly"
          },
          {video_url: "MVI_4437",video_name: "Feeling of general uneasiness"
          },
          {video_url: "MVI_4438",video_name: "I have chest pain"
          },
          {video_url: "MVI_4439",video_name: "Patchy hair loss"
          },
          {video_url: "MVI_4440",video_name: "Weight loss"
          },
          {video_url: "MVI_4441",video_name: "I have pain in my joints"
          },
          {video_url: "MVI_4442",video_name: "I have a backache"
          },
          {video_url: "MVI_4443",video_name: "I have a stiff neck"
          },
          {video_url: "MVI_4444",video_name: "I have difficulty in breathing"
          },
          {video_url: "MVI_4445",video_name: "I have a sore in my throat"
          },
          {video_url: "MVI_4448",video_name: "I have a burning sensation"
          },
          {video_url: "MVI_4449",video_name: "Can you point to where it hurts"
          },
          {video_url: "MVI_4450",video_name: "I need to take your blood pressure"
          },
          {video_url: "MVI_4454",video_name: "Open your mouth and say ah"
          },
          {video_url: "MVI_4455",video_name: "Can you follow my finger with your eyes"
          },
          {video_url: "MVI_4457",video_name: "Please lie down on the examination table"
          },
          {video_url: "MVI_4458",video_name: "I need to check your pulse"
          },
          {video_url: "MVI_4462",video_name: "Can you show me where the pain is on this board"
          },
          {video_url: "MVI_4466",video_name: "Do you have any medical condition"
          },
          {video_url: "MVI_4468",video_name: "I need to examine your ears nose and throat"
          },
          {video_url: "MVI_4469",video_name: "Please remove your shirt for a chest examination"
          },
          {video_url: "MVI_4470",video_name: "Can you sign your name on this form"
          },
          {video_url: "MVI_4471",video_name: "Please drink this water before te test "
          },
          {video_url: "MVI_4472",video_name: "I need to measure your temperature"
          },
          {video_url: "MVI_4474",video_name: "Can you show me how you take your medications"
          },
          {video_url: "MVI_4475",video_name: "Please put on this hospital gown"
          },
          {video_url: "MVI_4479",video_name: "I need to listen to your heart rate"
          },
          {video_url: "MVI_4480",video_name: "Can you show me how you move your injured limb"
          },
          {video_url: "MVI_4481",video_name: "Please read the letters on this eye chart"
          },
          {video_url: "MVI_4482",video_name: "I need to perform a physical examination"
          },
          {video_url: "MVI_4483",video_name: "Can you show me your previous medical records"
          },
          {video_url: "MVI_4484",video_name: "Can you show me your previous medical records"
          },
          {video_url: "MVI_4485",video_name: "Please remove your shoes and socks for a foot examination"
          },
          {video_url: "MVI_4489",video_name: "Can you show me how you use this device"
          },
          {video_url: "MVI_4490",video_name: "Please tilt your head back for a throat examination"
          },
          {video_url: "MVI_4492",video_name: "I need to take a urine sample for testing"
          },
          {video_url: "MVI_4493",video_name: "Can you show mehow you do your breathing exercises"
          },
          {video_url: "MVI_4494",video_name: "Please close your eyes and tell me what you feel"
          },
          {video_url: "MVI_4496",video_name: "I need to perform a skin examination"
          },
          {video_url: "MVI_4497",video_name: "Can you show me your medication schedule"
          },
          {video_url: "MVI_4498",video_name: "Please stand up and walk towards me"
          },
          {video_url: "MVI_4500",video_name: "I need to measure your height and weight"
          },
          {video_url: "MVI_4501",video_name: "Please hold still while I examine your  wound"
          },
          {video_url: "MVI_4502",video_name: "Do you have any questions or concerns"
          },
          {video_url: "MVI_4504",video_name: "Can you write that down please"
          },
          {video_url: "MVI_4507",video_name: "I am allergic to this medication don't give it to me"
          },
          {video_url: "MVI_4510",video_name: "Can I have an interpreter during my appointment"
          },
          {video_url: "MVI_4513",video_name: "I don't understand can you explain it to me again"
          },
          {video_url: "MVI_4514",video_name: "How long will it take for me to recover."
          },
          {video_url: "MVI_4515",video_name: "Can you sign slowly"
          },
          {video_url: "MVI_4516",video_name: "Can you talk slowly"
          },
          {video_url: "MVI_4517",video_name: "Thank you for your help"
          },
          {video_url: "MVI_4520",video_name: "Okay I will try my best to follow your instructions "
          },
          {video_url: "MVI_4521",video_name: "Sure I can show you where it hurts"
          },
          {video_url: "MVI_4523",video_name: "I have never had any allergiesto medications before"
          },
          {video_url: "MVI_4524",video_name: "I am a bit nervous about getting a shot but I understand it Is necessary "
          },
          {video_url: "MVI_4528",video_name: "I do not feel comfortable taking off my clothes for an exam"
          },
          {video_url: "MVI_4529",video_name: "I am having trouble seeing your finger, can you please move it slower"
          },
          {video_url: "MVI_4531",video_name: "I am feeling a bit dizzy lying down is that normal"
          },
          {video_url: "MVI_4534",video_name: "I have a fast heart is that something to worry about"
          },
          {video_url: "MVI_4538",video_name: "The pain is around here"
          },
          {video_url: "MVI_4540",video_name: "I am scared of needles can you please be gentle"
          },
          {video_url: "MVI_4543",video_name: "Yes I have diabetes and high blood pressure"
          },
          {video_url: "MVI_4545",video_name: "I am having trouble hearing you can you please speak louder"
          },
          {video_url: "MVI_4546",video_name: "I am feeling cold can you put my shirt back on"
          },
          {video_url: "MVI_4547",video_name: "I am sorry I do not know how to sign my name"
          },
          {video_url: "MVI_4549",video_name: "Why do I need to drink waterbefore the test"
          },
          {video_url: "MVI_4551",video_name: "I usually take my medication after breakfast"
          },
          {video_url: "MVI_4552",video_name: "I do not remember all the details of my medical history can you help me"
          },
          {video_url: "MVI_4554",video_name: "Can I look away when you give me the shot"
          },
          {video_url: "MVI_4555",video_name: "How old are you"
          },
          {video_url: "MVI_4556",video_name: "What symptoms are you experiencing"
          },
          {video_url: "MVI_4557",video_name: "Have you had a fever recently"
          },
          {video_url: "MVI_4558",video_name: "Are you experiencing any pain"
          },
          {video_url: "MVI_4561",video_name: "Have you noticed any lumps or bumps"
          },
          {video_url: "MVI_4562",video_name: "Are you experiencing any difficulty breathing"
          },
          {video_url: "MVI_4563",video_name: "Are you experiencing any chest pain"
          },
          {video_url: "MVI_4565",video_name: "Are you experiencing any changes in your vision"
          },
          {video_url: "MVI_4566",video_name: "Have you noticed any changes in your skin"
          },
          {video_url: "MVI_4567",video_name: "Are you experiencing any changes in your vision"
          },
          {video_url: "MVI_4568",video_name: "Have you noticed any changes in your hearing"
          },
          {video_url: "MVI_4569",video_name: "Are you experiencing any dizziness or lightheadedness"
          },
          {video_url: "MVI_4570",video_name: "Are you experiencing any headaches"
          },
          {video_url: "MVI_4572",video_name: "Are you experiencing any digestive issues"
          },
          {video_url: "MVI_4573",video_name: "Have you noticed any changes in your appetite"
          },
          {video_url: "MVI_4574",video_name: "Are you experiencing any difficulty swallowing"
          },
          {video_url: "MVI_4575",video_name: "Have you noticed any changes in your urine or bowel movements"
          },
          {video_url: "MVI_4576",video_name: "Are you experiencing any difficulty with your balance or coordination"
          },
          {video_url: "MVI_4577",video_name: "Are you experiencing any numbness or tingling"
          },
          {video_url: "MVI_4580",video_name: "Have you noticed any changes in your menstrual cycle"
          },
          {video_url: "MVI_4582",video_name: "Are you experiencing any problems with your sexual function"
          },
          {video_url: "MVI_4583",video_name: "Are there any vaccines or preventative measures I should consider to avoid future illness"
          },
          {video_url: "MVI_4584",video_name: "What re the possible lon-term effects of my condition"
          },
          {video_url: "MVI_4587",video_name: "Are there any potential interactions with my current medications and other supplements"
          },
          {video_url: "MVI_4591",video_name: "How can I manage my symptoms while I wait for my appointment"
          },
          {video_url: "MVI_4594",video_name: "Are there any self-care techniques that can help me feel better during my recovery process"
          },
          {video_url: "MVI_4595",video_name: "I have a headache"
          },
          {video_url: "MVI_4597",video_name: "How long have you had the headache. Have you taken anything for it"
          },
          {video_url: "MVI_4598",video_name: "I have a sore throat."
          },
          {video_url: "MVI_4599",video_name: "Do you have any other symptoms, such as a fever or cough"
          },
          {video_url: "MVI_4604",video_name: "How long have you had the cough? Is it productive or dry?"
          },
          {video_url: "MVI_4605",video_name: "I have a fever"
          },
          {video_url: "MVI_4606",video_name: "Have you taken your temperature. What other symptoms do you have"
          },
          {video_url: "MVI_4607",video_name: "I have a rash"
          },
          {video_url: "MVI_4610",video_name: "How long have you had diarrhea? Have you been eating or drinking anything unusual?"
          },
          {video_url: "MVI_4611",video_name: "I have constipation"
          },
          {video_url: "MVI_4613",video_name: "How long have you been constipated? Have you made any changes to your diet or routine?"
          },
          {video_url: "MVI_4614",video_name: "I have a stomachache"
          },
          {video_url: "MVI_4617",video_name: "Where is the pain located? Does it come and go, or is it constant"
          },
          {video_url: "MVI_4618",video_name: "I have a sprained ankle."
          },
          {video_url: "MVI_4620",video_name: "How did you injure your ankle? Have you tried icing and elevating it?"
          },
          {video_url: "MVI_4621",video_name: "I have high blood pressure"
          },
          {video_url: "MVI_4622",video_name: "How long have you known about your high blood pressure? Are you taking any medication for it?"
          },
          {video_url: "MVI_4623",video_name: "I have diabetes"
          },
          {video_url: "MVI_4624",video_name: "Are you experiencing any symptoms related to your diabetes, such as increased thirst or frequent urination"
          },
          {video_url: "MVI_4626",video_name: "I have asthma"
          },
          {video_url: "MVI_4627",video_name: "How often do you experience asthma symptoms? Are you using an inhaler regularly"
          },
          {video_url: "MVI_4629",video_name: "What are you allergic to? Have you tried any over-the-counter allergy medication"
          },
          {video_url: "MVI_4630",video_name: "How long have you had the back pain? Is it a sharp or dull pain?"
          },
          {video_url: "MVI_4632",video_name: "I have back pain"
          },
          {video_url: "MVI_4633",video_name: "How long have you had the back pain? Is it a sharp or dull pain?"
          },
          {video_url: "MVI_4634",video_name: "How long have you had the cold? Are you experiencing any other symptoms, such as a sore throat or fever"
          },
          {video_url: "MVI_4636",video_name: "How long have you had the cold? Are you experiencing any other symptoms, such as a sore throat or fever"
          },
          {video_url: "MVI_4639",video_name: "Have you been experiencing symptoms such as pain or burning when you urinate, or an urgent need to urinate?"
          },
          {video_url: "MVI_4645",video_name: "Are you experiencing symptoms such as itching, burning, or discharge?"
          },
          {video_url: "MVI_4646",video_name: "I have a sore back"
          },
          {video_url: "MVI_4648",video_name: "Are you experiencing any pain or discomfort from the cold sore? Have you tried any over-the-counter treatments"
          },
          {video_url: "MVI_4649",video_name: "I have an ear infection"
          },
          {video_url: "MVI_4650",video_name: "Have you been experiencing symptoms such as ear pain or discharge"
          },
          {video_url: "MVI_4651",video_name: "I have an upset stomach"
          },
          {video_url: "MVI_4652",video_name: "I have a toothache"
          },
          {video_url: "MVI_4653",video_name: "Are you experiencing any swelling or sensitivity to hot or cold temperatures"
          },
          {video_url: "MVI_4655",video_name: "I have a migraine"
          },
          {video_url: "MVI_4656",video_name: "How often do you experience migraines? Have you tried any treatments for them before?"
          },
          {video_url: "MVI_4660",video_name: "I have a sprained wrist."
          },
          {video_url: "MVI_4661",video_name: "I have a cold and a cough."
          },
          {video_url: "MVI_4662",video_name: "I've been having a headache for a few days now"
          },
          {video_url: "MVI_4664",video_name: "I think I have a cold."
          },
          {video_url: "MVI_4665",video_name: "What symptoms are you experiencing? Have you had a fever or cough?"
          },
          {video_url: "MVI_4666",video_name: "I have a stomachache"
          },
          {video_url: "MVI_4667",video_name: "I think I have the flu"
          },
          {video_url: "MVI_4668",video_name: "What symptoms are you experiencing? Have you had a fever or body aches?"
          },
          {video_url: "MVI_4670",video_name: "I have a rash on my arm."
          },
          {video_url: "MVI_4672",video_name: "When did the rash appear? Does it itch or hurt?"
          },
          {video_url: "MVI_4673",video_name: "I have been feeling tired all the time"
          },
          {video_url: "MVI_4674",video_name: "Have you been sleeping well? Have you made any recent changes to your diet or routine?"
          },
          {video_url: "MVI_4675",video_name: "I have a cough and a runny nose"
          },
          {video_url: "MVI_4676",video_name: "I have an earache."
          },
          {video_url: "MVI_4678",video_name: "Is the pain in one or both ears? "
          },
          {video_url: "MVI_4680",video_name: "Is the pain in one or both ears? "
          },
          {video_url: "MVI_4686",video_name: "Last night"
          },
          {video_url: "MVI_4687",video_name: "Yesterday"
          },
          {video_url: "MVI_4688",video_name: "Today"
          },
          {video_url: "MVI_4689",video_name: "Last week"
          },
          {video_url: "MVI_4690",video_name: "This week"
          },
          {video_url: "MVI_4691",video_name: "This morning"
          },
          {video_url: "MVI_4693",video_name: "This afternoon"
          },
          {video_url: "MVI_4694",video_name: "This evening"
          },
          {video_url: "MVI_4695",video_name: "Three days ago"
          },
          {video_url: "MVI_4696",video_name: "Six weeks ago"
          },
          {video_url: "MVI_4697",video_name: "A long time ago"
          },
          {video_url: "MVI_4699",video_name: "A while ago"
          },
          {video_url: "MVI_4700",video_name: "Monday"
          },
          {video_url: "MVI_4701",video_name: "Tuesday"
          },
          {video_url: "MVI_4702",video_name: "Wednesday"
          },
          {video_url: "MVI_4703",video_name: "Thursday"
          },
          {video_url: "MVI_4704",video_name: "Saturday "
          },
          {video_url: "MVI_4705",video_name: "Sunday"
          },
          {video_url: "MVI_4706",video_name: "One"
          },
          {video_url: "MVI_4707",video_name: "Two"
          },
          {video_url: "MVI_4708",video_name: "Three"
          },
          {video_url: "MVI_4709",video_name: "Four"
          },
          {video_url: "MVI_4710",video_name: "Five"
          },
          {video_url: "MVI_4711",video_name: "Six "
          },
          {video_url: "MVI_4712",video_name: "Seven"
          },
          {video_url: "MVI_4713",video_name: "Eight"
          },
          {video_url: "MVI_4714",video_name: "Nine"
          },
          {video_url: "MVI_4715",video_name: "Ten"
          },
          {video_url: "MVI_4716",video_name: "A"
          },
          {video_url: "MVI_4717",video_name: "B"
          },
          {video_url: "MVI_4718",video_name: "C"
          },
          {video_url: "MVI_4719",video_name: "D"
          },
          {video_url: "MVI_4720",video_name: "E "
          },
          {video_url: "MVI_4721",video_name: "F"
          },
          {video_url: "MVI_4722",video_name: "G"
          },
          {video_url: "MVI_4723",video_name: "H"
          },
          {video_url: "MVI_4724",video_name: "I"
          },
          {video_url: "MVI_4725",video_name: "J"
          },
          {video_url: "MVI_4726",video_name: "K"
          },
          {video_url: "MVI_4727",video_name: "L"
          },
          {video_url: "MVI_4728",video_name: "M"
          },
          {video_url: "MVI_4729",video_name: "N"
          },
          {video_url: "MVI_4730",video_name: "O"
          },
          {video_url: "MVI_4731",video_name: "P"
          },
          {video_url: "MVI_4732",video_name: "Q"
          },
          {video_url: "MVI_4733",video_name: "R"
          },
          {video_url: "MVI_4734",video_name: "S"
          },
          {video_url: "MVI_4735",video_name: "T"
          },
          {video_url: "MVI_4736",video_name: "U"
          },
          {video_url: "MVI_4737",video_name: "V"
          },
          {video_url: "MVI_4738",video_name: "W"
          },
          {video_url: "MVI_4739",video_name: "X"
          },
          {video_url: "MVI_4740",video_name: "Y"
          },
          {video_url: "MVI_4741",video_name: "Z"
          },
          {video_url: "MVI_4742",video_name: "About"
          },
          {video_url: "MVI_4743",video_name: "Almost"
          },
          {video_url: "MVI_4744",video_name: "Years"
          },
          {video_url: "MVI_4745",video_name: "Months"
          },
          {video_url: "MVI_4746",video_name: "Weeks"
          },
          {video_url: "MVI_4747",video_name: "Days"
          },
          {video_url: "MVI_4748",video_name: "Hours"
          },
          {video_url: "MVI_4749",video_name: "Minutes"
          },
          {video_url: "MVI_4750",video_name: "Know"
          },
          {video_url: "MVI_4751",video_name: "Injury"
          },
          {video_url: "MVI_4752",video_name: "Doctor"
          },
          {video_url: "MVI_4753",video_name: "Every"
          },
          {video_url: "MVI_4754",video_name: "Do"
          },
          {video_url: "MVI_4755",video_name: "Before"
          },
          {video_url: "MVI_4756",video_name: "You"
          },
          {video_url: "MVI_4757",video_name: "Your"
          },
          {video_url: "MVI_4758",video_name: "Abdomen"
          },
          {video_url: "MVI_4759",video_name: "Sit"
          },
          {video_url: "MVI_4760",video_name: "Work"
          },
          {video_url: "MVI_4761",video_name: "Wake"
          },
          {video_url: "MVI_4762",video_name: "Bend"
          },
          {video_url: "MVI_4763",video_name: "Walk"
          },
          {video_url: "MVI_4764",video_name: "Run"
          },
          {video_url: "MVI_4765",video_name: "First"
          },
          {video_url: "MVI_4766",video_name: "Second"
          },
          {video_url: "MVI_4767",video_name: "Third"
          },
          {video_url: "MVI_4768",video_name: "Time"
          },
          {video_url: "MVI_4769",video_name: "No"
          },
          {video_url: "MVI_4770",video_name: "Yes"
          },
          {video_url: "MVI_4771",video_name: "Now"
          },
          {video_url: "MVI_4772",video_name: "But"
          },
          {video_url: "MVI_4773",video_name: "Different"
          },
          {video_url: "MVI_4774",video_name: "Breathe"
          },
          {video_url: "MVI_4775",video_name: "Move"
          },
          {video_url: "MVI_4777",video_name: "Sometimes"
          },
          {video_url: "MVI_4778",video_name: "Often"
          },
          {video_url: "MVI_4779",video_name: "Constant"
          },
          {video_url: "MVI_4781",video_name: "Several"
          },
          {video_url: "MVI_4783",video_name: "Around"
          },
          {video_url: "MVI_4784",video_name: "Appear"
          },
          {video_url: "MVI_4785",video_name: "Relieve"
          },
          {video_url: "MVI_4786",video_name: "Comfort"
          },
          {video_url: "MVI_4787",video_name: "Eat"
          },
          {video_url: "MVI_4789",video_name: "Sometimes"
          },
          {video_url: "MVI_4790",video_name: "Feel"
          },
          {video_url: "MVI_4791",video_name: "Food"
          },
          {video_url: "MVI_4795",video_name: "Down"
          },
          {video_url: "MVI_4796",video_name: "Lie down"
          },
          {video_url: "MVI_4797",video_name: "Help"
          },
          {video_url: "MVI_4798",video_name: "Take"
          },
          {video_url: "MVI_4799",video_name: "Bath"
          },
          {video_url: "MVI_4800",video_name: "Stand"
          },
          {video_url: "MVI_4801",video_name: "Better"
          },
          {video_url: "MVI_4802",video_name: "Little"
          },
          {video_url: "MVI_4803",video_name: "Head"
          },
          {video_url: "MVI_4804",video_name: "Face"
          },
          {video_url: "MVI_4805",video_name: "Body"
          },
          {video_url: "MVI_4806",video_name: "Skin"
          },
          {video_url: "MVI_4807",video_name: "Eye"
          },
          {video_url: "MVI_4808",video_name: "Stomach"
          },
          {video_url: "MVI_4809",video_name: "Where"
          },
          {video_url: "MVI_4810",video_name: "Hurt"
          },
          {video_url: "MVI_4811",video_name: "Hospital"
          },
          {video_url: "MVI_4813",video_name: "Allergy"
          },
          {video_url: "MVI_4814",video_name: "Feel"
          },
          {video_url: "MVI_4815",video_name: "Medicine"
          },
          {video_url: "MVI_4816",video_name: "Medical"
          },
          {video_url: "MVI_4817",video_name: "History"
          },
          {video_url: "MVI_4818",video_name: "Calm"
          },
          {video_url: "MVI_4819",video_name: "Ambulance"
          },
          {video_url: "MVI_4820",video_name: "Reception"
          },
          {video_url: "MVI_4821",video_name: "Medical history"
          },
          {video_url: "MVI_4822",video_name: "Hello"
          },
          {video_url: "MVI_4823",video_name: "Good-bye"
          },
          {video_url: "MVI_4824",video_name: "Welcome"
          },
          {video_url: "MVI_4825",video_name: "Hearing"
          },
          {video_url: "MVI_4826",video_name: "Deaf"
          },
          {video_url: "MVI_4827",video_name: "Hard of hearing"
          },
          {video_url: "MVI_4828",video_name: "AIDS"
          },
          {video_url: "MVI_4830",video_name: "Infection"
          },
          {video_url: "MVI_4831",video_name: "Medicine"
          },
          {video_url: "MVI_4832",video_name: "Family planning"
          },
          {video_url: "MVI_4833",video_name: "Sex"
          },
          {video_url: "MVI_4834",video_name: "Vagina"
          },
          {video_url: "MVI_4835",video_name: "Condom"
          },
          {video_url: "MVI_4836",video_name: "Monthly bleeding"
          },
          {video_url: "MVI_4837",video_name: "Know"
          },
          {video_url: "MVI_4838",video_name: "Love"
          },
          {video_url: "MVI_4839",video_name: "Please"
          },
          {video_url: "MVI_4840",video_name: "Smart"
          },
          {video_url: "MVI_4841",video_name: "Sorry"
          },
          {video_url: "MVI_4842",video_name: "Thank you"
          },
          {video_url: "MVI_4843",video_name: "Think"
          },
          {video_url: "MVI_4844",video_name: "Understand"
          },
          {video_url: "MVI_4846",video_name: "Bathroom"
          },
          {video_url: "MVI_4847",video_name: "Call"
          },
          {video_url: "MVI_4848",video_name: "Drink"
          },
          {video_url: "MVI_4849",video_name: "Eat"
          },
          {video_url: "MVI_4850",video_name: "Water"
          },
          {video_url: "MVI_4851",video_name: "More"
          },
          {video_url: "MVI_4852",video_name: "When"
          },
          {video_url: "MVI_4853",video_name: "Bad"
          },
          {video_url: "MVI_4854",video_name: "Good"
          },
          {video_url: "MVI_4855",video_name: "Breathing"
          },
          {video_url: "MVI_4857",video_name: "Cold"
          },
          {video_url: "MVI_4858",video_name: "Hot"
          },
          {video_url: "MVI_4859",video_name: "Doctor"
          },
          {video_url: "MVI_4860",video_name: "Nurse"
          },
          {video_url: "MVI_4861",video_name: "Family"
          },
          {video_url: "MVI_4862",video_name: "Husband"
          },
          {video_url: "MVI_4863",video_name: "Wife"
          },
          {video_url: "MVI_4864",video_name: "Hungry"
          },
          {video_url: "MVI_4866",video_name: "Nausea"
          },
          {video_url: "MVI_4867",video_name: "Medicine"
          },
          {video_url: "MVI_4868",video_name: "Pain"
          },
          {video_url: "MVI_4869",video_name: "Tired"
          },
          {video_url: "MVI_4870",video_name: "STI"
          },
          {video_url: "MVI_4871",video_name: "HIV"
          },
          {video_url: "MVI_4872",video_name: "Chills"
          },
          {video_url: "MVI_4873",video_name: "Numb"
          },
          {video_url: "MVI_4874",video_name: "Urinate"
          },
          {video_url: "MVI_4875",video_name: "Abuse"
          },
          {video_url: "MVI_4877",video_name: "Clean"
          },
          {video_url: "MVI_4878",video_name: "Wash"
          },
          {video_url: "MVI_4879",video_name: "Fever"
          },
          {video_url: "MVI_4881",video_name: "Pelvis"
          },
          {video_url: "MVI_4882",video_name: "Anus"
          },
          {video_url: "MVI_4883",video_name: "Cramps"
          },
          {video_url: "MVI_4884",video_name: "Growth"
          },
          {video_url: "MVI_4885",video_name: "Penis"
          },
          {video_url: "MVI_4886",video_name: "Birth"
          },
          {video_url: "MVI_4887",video_name: "Cut"
          },
          {video_url: "MVI_4888",video_name: "Pregnant"
          },
          {video_url: "MVI_4889",video_name: "Blood"
          },
          {video_url: "MVI_4890",video_name: "Depression"
          },
          {video_url: "MVI_4891",video_name: "Itchy"
          },
          {video_url: "MVI_4892",video_name: "Rape"
          },
          {video_url: "MVI_4893",video_name: "Blurred vision"
          },
          {video_url: "MVI_4894",video_name: "Diarrhea"
          },
          {video_url: "MVI_4895",video_name: "Labor"
          },
          {video_url: "MVI_4896",video_name: "Sleeping problems"
          },
          {video_url: "MVI_4897",video_name: "Breast"
          },
          {video_url: "MVI_4898",video_name: "Discharge"
          },
          {video_url: "MVI_4899",video_name: "Sweating"
          },
          {video_url: "MVI_4900",video_name: "Breastfeeding"
          },
          {video_url: "MVI_4901",video_name: "Dizzy"
          },
          {video_url: "MVI_4902",video_name: "Medicine"
          },
          {video_url: "MVI_4904",video_name: "Swollen"
          },
          {video_url: "MVI_4905",video_name: "Breathing"
          },
          {video_url: "MVI_4906",video_name: "Drugs"
          },
          {video_url: "MVI_4907",video_name: "Miscarriage"
          },
          {video_url: "MVI_4908",video_name: "Tenderness"
          },
          {video_url: "MVI_4909",video_name: "Problems"
          },
          {video_url: "MVI_4911",video_name: "Dry"
          },
          {video_url: "MVI_4912",video_name: "Mucus"
          },
          {video_url: "MVI_4914",video_name: "Vomit"
          },
          {video_url: "MVI_4915",video_name: "Vomit"
          },
          {video_url: "MVI_4916",video_name: "Burn"
          },
          {video_url: "MVI_4917",video_name: "Medical examination"
          },
          {video_url: "MVI_4918",video_name: "Nausea"
          },
          {video_url: "MVI_4919",video_name: "Weak"
          },
          {video_url: "MVI_4920",video_name: "Changes in color"
          },
          {video_url: "MVI_4921",video_name: "Womb"
          },
          {video_url: "MVI_4923",video_name: "Contractions"
          },
          {video_url: "MVI_4924",video_name: "Exercise"
          },
          {video_url: "MVI_4925",video_name: "Nervous"
          },
          {video_url: "MVI_4926",video_name: "Cough"
          },
          {video_url: "MVI_4927",video_name: "Faint"
          },
          {video_url: "MVI_4928",video_name: "Pass by"
          },
          {video_url: "MVI_4929",video_name: "Stool"
          },
          {video_url: "MVI_4930",video_name: "Back"
          },
          {video_url: "MVI_4931",video_name: "Bathroom"
          },
          {video_url: "MVI_4932",video_name: "Bed"
          },
          {video_url: "MVI_4933",video_name: "Better"
          },
          {video_url: "MVI_4934",video_name: "Blood"
          },
          {video_url: "MVI_4935",video_name: "Breath"
          },
          {video_url: "MVI_4936",video_name: "Calm down"
          },
          {video_url: "MVI_4937",video_name: "Can"
          },
          {video_url: "MVI_4938",video_name: "Cannot"
          },
          {video_url: "MVI_4940",video_name: "Change"
          },
          {video_url: "MVI_4941",video_name: "Chest"
          },
          {video_url: "MVI_4942",video_name: "Ear infection"
          },
          {video_url: "MVI_4943",video_name: "Don't know"
          },
          {video_url: "MVI_4944",video_name: "Write"
          },
          {video_url: "MVI_4945",video_name: "Cough"
          },
          {video_url: "MVI_4946",video_name: "Dizziness"
          },
          {video_url: "MVI_4947",video_name: "Stay"
          },
          {video_url: "MVI_4948",video_name: "Thank you"
          },
          {video_url: "MVI_4949",video_name: "Thirst"
          },
          {video_url: "MVI_4950",video_name: "Tired"
          },
          {video_url: "MVI_4951",video_name: "Understand"
          },
          {video_url: "MVI_4952",video_name: "Vomit"
          },
          {video_url: "MVI_4953",video_name: "Wait"
          },
          {video_url: "MVI_4954",video_name: "Want"
          },
          {video_url: "MVI_4955",video_name: "Water"
          },
          {video_url: "MVI_4956",video_name: "Well"
          },
          {video_url: "MVI_4957",video_name: "Where"
          },
          {video_url: "MVI_4958",video_name: "Who"
          },
          {video_url: "MVI_4959",video_name: "Food"
          },
          {video_url: "MVI_4960",video_name: "Feeling"
          },
          {video_url: "MVI_4961",video_name: "Fine"
          },
          {video_url: "MVI_4962",video_name: "Friend"
          },
          {video_url: "MVI_4964",video_name: "Get up"
          },
          {video_url: "MVI_4965",video_name: "Good"
          },
          {video_url: "MVI_4966",video_name: "Happen"
          },
          {video_url: "MVI_4967",video_name: "Hard"
          },
          {video_url: "MVI_4968",video_name: "Lie down"
          },
          {video_url: "MVI_4969",video_name: "Need"
          },
          {video_url: "MVI_4970",video_name: "Now"
          },
          {video_url: "MVI_4971",video_name: "Today"
          },
          {video_url: "MVI_4972",video_name: "Phone"
          },
          {video_url: "MVI_4974",video_name: "Pills"
          },
          {video_url: "MVI_4975",video_name: "Please"
          },
          {video_url: "MVI_4976",video_name: "Put on"
          },
          {video_url: "MVI_4977",video_name: "Sick"
          },
          {video_url: "MVI_4978",video_name: "Sleepy"
          },
          {video_url: "MVI_4979",video_name: "Injection"
          },
          {video_url: "MVI_4980",video_name: "Interpret"
          },
          {video_url: "MVI_4981",video_name: "Improve"
          },
          {video_url: "MVI_4982",video_name: "Hospital"
          },
          {video_url: "MVI_4983",video_name: "Home"
          },
          {video_url: "MVI_4984",video_name: "Have"
          },
          {video_url: "MVI_4985",video_name: "Eleven"
          },
          {video_url: "MVI_4986",video_name: "Twelve"
          },
          {video_url: "MVI_4987",video_name: "Thirteen"
          },
          {video_url: "MVI_4988",video_name: "Fourteen"
          },
          {video_url: "MVI_4989",video_name: "Fifteen"
          },
          {video_url: "MVI_4990",video_name: "Sixteen"
          },
          {video_url: "MVI_4991",video_name: "Seventeen"
          },
          {video_url: "MVI_4992",video_name: "Eighteen"
          },
          {video_url: "MVI_4993",video_name: "Nineteen"
          },
          {video_url: "MVI_4994",video_name: "Twenty"
          },
          {video_url: "MVI_4995",video_name: "Twenty one"
          },
          {video_url: "MVI_4996",video_name: "Twenty two"
          },
          {video_url: "MVI_4997",video_name: "Twenty three"
          },
          {video_url: "MVI_4998",video_name: "Twenty four"
          },
          {video_url: "MVI_4999",video_name: "Twenty five"
          },
          {video_url: "MVI_5000",video_name: "Twenty six"
          },
          {video_url: "MVI_5001",video_name: "Twenty seven"
          },
          {video_url: "MVI_5002",video_name: "Twenty eight"
          },
          {video_url: "MVI_5003",video_name: "Twenty nine"
          },
          {video_url: "MVI_5004",video_name: "Thirty"
          },
          {video_url: "MVI_5005",video_name: "Thirty one"
          },
          {video_url: "MVI_5006",video_name: "Thirty two"
          },
          {video_url: "MVI_5007",video_name: "Thirty three"
          },
          {video_url: "MVI_5008",video_name: "Thirty four"
          },
          {video_url: "MVI_5009",video_name: "Thirty five"
          },
          {video_url: "MVI_5010",video_name: "Thirty six"
          },
          {video_url: "MVI_5011",video_name: "Thirty seven"
          },
          {video_url: "MVI_5012",video_name: "Thirty eight"
          },
          {video_url: "MVI_5013",video_name: "Thirty nine"
          },
          {video_url: "MVI_5014",video_name: "Forty"
          },
          {video_url: "MVI_5015",video_name: "Fifty"
          },
          {video_url: "MVI_5016",video_name: "Sixty"
          },
          {video_url: "MVI_5017",video_name: "Seventy"
          },
          {video_url: "MVI_5018",video_name: "Eighty"
          },
          {video_url: "MVI_5019",video_name: "Ninety"
          },
          {video_url: "MVI_5020",video_name: "Hundred"
          },
          {video_url: "MVI_5021",video_name: "Thousand"
          },
          {video_url: "MVI_5022",video_name: "One Million"
          },
          {video_url: "MVI_5023",video_name: "One Billion"
          },
          {video_url: "MVI_5024",video_name: "Colour"
          },
          {video_url: "MVI_5025",video_name: "Red"
          },
          {video_url: "MVI_5026",video_name: "Blue"
          },
          {video_url: "MVI_5027",video_name: "Yellow"
          },
          {video_url: "MVI_5028",video_name: "Green"
          },
          {video_url: "MVI_5029",video_name: "Orange"
          },
          {video_url: "MVI_5030",video_name: "Purple"
          },
          {video_url: "MVI_5031",video_name: "Violet"
          },
          {video_url: "MVI_5032",video_name: "Pink"
          },
          {video_url: "MVI_5033",video_name: "Brown"
          },
          {video_url: "MVI_5034",video_name: "Black"
          },
          {video_url: "MVI_5035",video_name: "White"
          },
          {video_url: "MVI_5036",video_name: "Family"
          },
          {video_url: "MVI_5037",video_name: "Parents"
          },
          {video_url: "MVI_5038",video_name: "Father"
          },
          {video_url: "MVI_5039",video_name: "Mother"
          },
          {video_url: "MVI_5040",video_name: "Grandfather"
          },
          {video_url: "MVI_5041",video_name: "Grandmother"
          },
          {video_url: "MVI_5042",video_name: "Boy"
          },
          {video_url: "MVI_5043",video_name: "Girl"
          },
          {video_url: "MVI_5044",video_name: "Daughter"
          },
          {video_url: "MVI_5045",video_name: "Son"
          },
          {video_url: "MVI_5046",video_name: "Sister"
          },
          {video_url: "MVI_5047",video_name: "Brother"
          },
          {video_url: "MVI_5048",video_name: "Aunt"
          },
          {video_url: "MVI_5049",video_name: "Uncle"
          },
          {video_url: "MVI_5050",video_name: "Aunt"
          },
          {video_url: "MVI_5051",video_name: "Nephew"
          },
          {video_url: "MVI_5052",video_name: "Niece"
          },
          {video_url: "MVI_5053",video_name: "Cousin"
          },
          {video_url: "MVI_5054",video_name: "Relationship"
          },
          {video_url: "MVI_5055",video_name: "Sweatheart"
          },
          {video_url: "MVI_5056",video_name: "Engaged"
          },
          {video_url: "MVI_5057",video_name: "Marriage"
          },
          {video_url: "MVI_5058",video_name: "Wedding"
          },
          {video_url: "MVI_5059",video_name: "Husband"
          },
          {video_url: "MVI_5060",video_name: "Wife"
          },
          {video_url: "MVI_5061",video_name: "Baby"
          },
          {video_url: "MVI_5062",video_name: "Child"
          },
          {video_url: "MVI_5063",video_name: "Children"
          },
          {video_url: "MVI_5064",video_name: "Young"
          },
          {video_url: "MVI_5065",video_name: "Kid"
          },
          {video_url: "MVI_5066",video_name: "Twins"
          },
          {video_url: "MVI_5067",video_name: "In-law"
          },
          {video_url: "MVI_5068",video_name: "Divorced"
          },
          {video_url: "MVI_5069",video_name: "Adult"
          },
          {video_url: "MVI_5071",video_name: "Man"
          },
          {video_url: "MVI_5072",video_name: "Woman"
          },
          {video_url: "MVI_5073",video_name: "Gentleman"
          },
          {video_url: "MVI_5074",video_name: "Lady"
          },
          {video_url: "MVI_5075",video_name: "Person"
          },
          {video_url: "MVI_5076",video_name: "People"
          },
          {video_url: "MVI_5077",video_name: "Individual"
          },
          {video_url: "MVI_5078",video_name: "Name"
          },
          {video_url: "MVI_5079",video_name: "Friend"
          },
          {video_url: "MVI_5080",video_name: "Enemy"
          },
          {video_url: "MVI_5081",video_name: "Group"
          },
          {video_url: "MVI_5082",video_name: "Neighbor"
          },
          {video_url: "MVI_5083",video_name: "Gang"
          },
          {video_url: "MVI_5084",video_name: "Robber"
          },
          {video_url: "MVI_5085",video_name: "Rasta"
          },
          {video_url: "MVI_5086",video_name: "White man"
          },
          {video_url: "MVI_5087",video_name: "I"
          },
          {video_url: "MVI_5088",video_name: "Me"
          },
          {video_url: "MVI_5089",video_name: "My"
          },
          {video_url: "MVI_5090",video_name: "Mine"
          },
          {video_url: "MVI_5091",video_name: "Myself"
          },
          {video_url: "MVI_5092",video_name: "Myself"
          },
          {video_url: "MVI_5093",video_name: "You"
          },
          {video_url: "MVI_5094",video_name: "Your"
          },
          {video_url: "MVI_5095",video_name: "Yourself"
          },
          {video_url: "MVI_5096",video_name: "Us"
          },
          {video_url: "MVI_5097",video_name: "We"
          },
          {video_url: "MVI_5098",video_name: "Our"
          },
          {video_url: "MVI_5099",video_name: "Our"
          },
          {video_url: "MVI_5100",video_name: "He"
          },
          {video_url: "MVI_5101",video_name: "His"
          },
          {video_url: "MVI_5102",video_name: "Her"
          },
          {video_url: "MVI_5103",video_name: "Hers"
          },
          {video_url: "MVI_5105",video_name: "Someone"
          },
          {video_url: "MVI_5106",video_name: "Everyone"
          },
          {video_url: "MVI_5107",video_name: "Other"
          },
          {video_url: "MVI_5108",video_name: "This"
          },
          {video_url: "MVI_5109",video_name: "That"
          },
          {video_url: "MVI_5110",video_name: "There"
          },
          {video_url: "MVI_5111",video_name: "They"
          },
          {video_url: "MVI_5112",video_name: "Those"
          },
          {video_url: "MVI_5113",video_name: "Them"
          },
          {video_url: "MVI_5115",video_name: "These"
          },
          {video_url: "MVI_5116",video_name: "Home"
          },
          {video_url: "MVI_5117",video_name: "House"
          },
          {video_url: "MVI_5118",video_name: "Dormitory"
          },
          {video_url: "MVI_5119",video_name: "Roof"
          },
          {video_url: "MVI_5120",video_name: "Floor"
          },
          {video_url: "MVI_5121",video_name: "Wall"
          },
          {video_url: "MVI_5122",video_name: "Gate"
          },
          {video_url: "MVI_5123",video_name: "Room"
          },
          {video_url: "MVI_5124",video_name: "Door"
          },
          {video_url: "MVI_5125",video_name: "Window"
          },
          {video_url: "MVI_5126",video_name: "Glass"
          },
          {video_url: "MVI_5127",video_name: "Fan"
          },
          {video_url: "MVI_5128",video_name: "Table"
          },
          {video_url: "MVI_5129",video_name: "Chair"
          },
          {video_url: "MVI_5130",video_name: "Bed"
          },
          {video_url: "MVI_5131",video_name: "Mat"
          },
          {video_url: "MVI_5132",video_name: "Mirror"
          },
          {video_url: "MVI_5133",video_name: "Refrigerator"
          },
          {video_url: "MVI_5134",video_name: "Basket"
          },
          {video_url: "MVI_5135",video_name: "Bucket"
          },
          {video_url: "MVI_5136",video_name: "Borehole"
          },
          {video_url: "MVI_5137",video_name: "Wash"
          },
          {video_url: "MVI_5138",video_name: "Bath"
          },
          {video_url: "MVI_5139",video_name: "Sponge"
          },
          {video_url: "MVI_5140",video_name: "Toilet"
          },
          {video_url: "MVI_5141",video_name: "Haircut"
          },
          {video_url: "MVI_5142",video_name: "Shave"
          },
          {video_url: "MVI_5143",video_name: "Iron"
          },
          {video_url: "MVI_5144",video_name: "Sewing"
          },
          {video_url: "MVI_5145",video_name: "Needle"
          },
          {video_url: "MVI_5146",video_name: "Tie knot"
          },
          {video_url: "MVI_5150",video_name: "Zip"
          },
          {video_url: "MVI_5151",video_name: "Soap"
          },
          {video_url: "MVI_5152",video_name: "Candle"
          },
          {video_url: "MVI_5153",video_name: "Thread"
          },
          {video_url: "MVI_5154",video_name: "Chain"
          },
          {video_url: "MVI_5155",video_name: "Blade"
          },
          {video_url: "MVI_5156",video_name: "Scissors"
          },
          {video_url: "MVI_5157",video_name: "Telephone"
          },
          {video_url: "MVI_5158",video_name: "Key"
          },
          {video_url: "MVI_5159",video_name: "Umbrella"
          },
          {video_url: "MVI_5160",video_name: "Wear"
          },
          {video_url: "MVI_5161",video_name: "Clothes"
          },
          {video_url: "MVI_5162",video_name: "Shirt"
          },
          {video_url: "MVI_5163",video_name: "Trousers"
          },
          {video_url: "MVI_5164",video_name: "Dress"
          },
          {video_url: "MVI_5165",video_name: "Skirt"
          },
          {video_url: "MVI_5166",video_name: "Coat"
          },
          {video_url: "MVI_5167",video_name: "Hat"
          },
          {video_url: "MVI_5168",video_name: "Gloves"
          },
          {video_url: "MVI_5169",video_name: "Necktie"
          },
          {video_url: "MVI_5170",video_name: "Socks"
          },
          {video_url: "MVI_5171",video_name: "Shoes"
          },
          {video_url: "MVI_5172",video_name: "Sandals"
          },
          {video_url: "MVI_5173",video_name: "Purse"
          },
          {video_url: "MVI_5174",video_name: "Bag"
          },
          {video_url: "MVI_5175",video_name: "Jewelry"
          },
          {video_url: "MVI_5176",video_name: "Cap"
          },
          {video_url: "MVI_5177",video_name: "Things"
          },
          {video_url: "MVI_5178",video_name: "Materials"
          },
          {video_url: "MVI_5179",video_name: "Breakfast"
          },
          {video_url: "MVI_5180",video_name: "Lunch"
          },
          {video_url: "MVI_5181",video_name: "Supper"
          },
          {video_url: "MVI_5182",video_name: "Food"
          },
          {video_url: "MVI_5183",video_name: "Eat"
          },
          {video_url: "MVI_5184",video_name: "Drink"
          },
          {video_url: "MVI_5185",video_name: "Hungry"
          },
          {video_url: "MVI_5186",video_name: "Starving"
          },
          {video_url: "MVI_5187",video_name: "Satisfied"
          },
          {video_url: "MVI_5188",video_name: "Bitter"
          },
          {video_url: "MVI_5189",video_name: "Sweet"
          },
          {video_url: "MVI_5190",video_name: "Restaurant"
          },
          {video_url: "MVI_5191",video_name: "Bowl"
          },
          {video_url: "MVI_5192",video_name: "Plate"
          },
          {video_url: "MVI_5193",video_name: "Cup"
          },
          {video_url: "MVI_5194",video_name: "Spoon"
          },
          {video_url: "MVI_5195",video_name: "Fork"
          },
          {video_url: "MVI_5196",video_name: "Knife"
          },
          {video_url: "MVI_5197",video_name: "Cook"
          },
          {video_url: "MVI_5198",video_name: "Kitchen"
          },
          {video_url: "MVI_5199",video_name: "Market"
          },
          {video_url: "MVI_5201",video_name: "Coal pot"
          },
          {video_url: "MVI_5202",video_name: "Grind"
          },
          {video_url: "MVI_5203",video_name: "Water"
          },
          {video_url: "MVI_5206",video_name: "Hi, Doctor. I've been having some chest pains lately."
          },
          {video_url: "MVI_5207",video_name: "Hello there. I'm sorry to hear that. "
          },
          {video_url: "MVI_5208",video_name: "Can you tell me more about your symptoms?"
          },
          {video_url: "MVI_5209",video_name: "The pain is usually in the center of my chest. "
          },
          {video_url: "MVI_5211",video_name: "The pain is usually in the center of my chest. "
          },
          {video_url: "MVI_5212",video_name: "Okay, that's good information. "
          },
          {video_url: "MVI_5214",video_name: "Have you noticed any other symptoms."
          },
          {video_url: "MVI_5215",video_name: "Yes. I've been feeling a lightheaded and short of breath."
          },
          {video_url: "MVI_5216",video_name: "I see. It sounds like we should do some tests."
          },
          {video_url: "MVI_5220",video_name: "That sounds a bit scary. Is it serious? "
          },
          {video_url: "MVI_5221",video_name: "That sounds a bit scary. Is it serious? "
          },
          {video_url: "MVI_5222",video_name: "It's too early to say."
          },
          {video_url: "MVI_5223",video_name: "It's too early to say."
          },
          {video_url: "MVI_5224",video_name: "I understand. What else can I do to?"
          },
          {video_url: "MVI_5225",video_name: "I understand. What else can I do to?"
          },
          {video_url: "MVI_5226",video_name: "If you smoke or drink, now is a good time to quit. "
          },
          {video_url: "MVI_5227",video_name: "If you smoke or drink, now is a good time to quit. "
          },
          {video_url: "MVI_5228",video_name: "Try to eat a healthy diet and get some exercise if you can"
          },
          {video_url: "MVI_5229",video_name: "Try to eat a healthy diet and get some exercise if you can"
          },
          {video_url: "MVI_5233",video_name: "If your symptoms worsen, don't hesitate to contact me."
          },
          {video_url: "MVI_5234",video_name: "If your symptoms worsen, don't hesitate to contact me."
          },
          {video_url: "MVI_5237",video_name: "Thank you, Doctor. I appreciate your help."
          },
          {video_url: "MVI_5238",video_name: "Take care and I'll be in touch as soon as we have the results."
          },
          {video_url: "MVI_5240",video_name: "Take care and I'll be in touch as soon as we have the results."
          },
          {video_url: "MVI_5241",video_name: "Good morning, doctor. I've been feeling really tired lately "
          },
          {video_url: "MVI_5242",video_name: "Good morning, doctor. I've been feeling really tired lately "
          },
          {video_url: "MVI_5243",video_name: "Good morning. Let's start by getting some more information"
          },
          {video_url: "MVI_5244",video_name: "When did you first start feeling tired?"
          },
          {video_url: "MVI_5245",video_name: "It's been about a week now. "
          },
          {video_url: "MVI_5247",video_name: "It's been about a week now. "
          },
          {video_url: "MVI_5249",video_name: "I've been sleeping more than usual"
          },
          {video_url: "MVI_5250",video_name: "I've been sleeping more than usual"
          },
          {video_url: "MVI_5251",video_name: "I still feel exhausted."
          },
          {video_url: "MVI_5252",video_name: "I still feel exhausted."
          },
          {video_url: "MVI_5254",video_name: "Have you been experiencing any other symptoms?"
          },
          {video_url: "MVI_5255",video_name: "Have you been experiencing any other symptoms?"
          },
          {video_url: "MVI_5256",video_name: "No, just some headaches."
          },
          {video_url: "MVI_5257",video_name: "No, just some headaches."
          },
          {video_url: "MVI_5259",video_name: "Okay, I'd like to do some tests "
          },
          {video_url: "MVI_5260",video_name: "Okay, I'd like to do some tests "
          },
          {video_url: "MVI_5261",video_name: "Okay. Is there anything I should be doing in the meantime"
          },
          {video_url: "MVI_5262",video_name: "Okay. Is there anything I should be doing in the meantime"
          },
          {video_url: "MVI_5263",video_name: "Yes, make sure you're getting plenty of rest and staying hydrated. "
          },
          {video_url: "MVI_5264",video_name: "Yes, make sure you're getting plenty of rest and staying hydrated. "
          },
          {video_url: "MVI_5266",video_name: "Try to eat a balanced diet and get some light exercise as well."
          },
          {video_url: "MVI_5267",video_name: "Try to eat a balanced diet and get some light exercise as well."
          },
          {video_url: "MVI_5268",video_name: "Okay, I'll do my best. Thanks, doctor."
          },
          {video_url: "MVI_5270",video_name: "Okay, I'll do my best. Thanks, doctor."
          }
        ],
      });
  
    // const video = await prisma.video.deleteMany({})

      console.log(video)
    } catch (error) {
      console.log(error);
    }
  }



  
  
  // const videoData3 = [
  //   { video_url: "MVL_4061", video_name: "Thinking hard" },
  //   { video_url: "MVL_4062", video_name: "Thinking hard" },
  //   { video_url: "MVL_4063", video_name: "Keep in mind" },
  //   { video_url: "MVL_4064", video_name: "Evict" },
  //   { video_url: "MVL_4065", video_name: "Suspend" },
  //   { video_url: "MVL_4067", video_name: "Backbiting" },
  //   { video_url: "MVL_4068", video_name: "Don't bother me" },
  //   { video_url: "MVL_4070", video_name: "Refusing" },
  //   { video_url: "MVL_4071", video_name: "Out of here" },
  //   { video_url: "MVL_4073", video_name: "Getting away" },
  //   { video_url: "MVL_4074", video_name: "Peeping" },
  //   { video_url: "MVL_4075", video_name: "Copying someone" },
  //   { video_url: "MVL_4076", video_name: "Not interested" },
  //   { video_url: "MVL_4080", video_name: "You are interfering" },
  //   { video_url: "MVL_4080", video_name: "Not my problem" },
  //   { video_url: "MVL_4081", video_name: "Don't like you" },
  //   { video_url: "MVL_4083", video_name: "Sick of you" },
  //   { video_url: "MVL_4084", video_name: "Hard stare" },
  //   { video_url: "MVL_4085", video_name: "Gazing" },
  //   { video_url: "MVL_4086", video_name: "Fed up" },
  //   { video_url: "MVL_4087", video_name: "I told you so" },
  //   { video_url: "MVL_4088", video_name: "What did I tell you" },
  //   { video_url: "MVL_4089", video_name: "Keep for revenge" },
  //   { video_url: "MVL_4090", video_name: "Fifty fifty" },
  //   { video_url: "MVL_4092", video_name: "Idea" },
  //   { video_url: "MVL_4093", video_name: "Experience" },
  //   { video_url: "MVL_4094", video_name: "Like" },
  //   { video_url: "MVL_4095", video_name: "Favourite" },
  //   { video_url: "MVL_4096", video_name: "Know" },
  //   { video_url: "MVL_4097", video_name: "Misunderstand" },
  //   { video_url: "MVL_4098", video_name: "Obey" },
  //   { video_url: "MVL_4099", video_name: "Before" },
  //   { video_url: "MVL_4100", video_name: "Forget" },
  //   { video_url: "MVL_4101", video_name: "Doubt" },
  //   { video_url: "MVL_4102", video_name: "Lie" },
  //   { video_url: "MVL_4103", video_name: "Confident" },
  //   { video_url: "MVL_4104", video_name: "Dream" },
  //   { video_url: "MVL_4106", video_name: "Wish" },
  //   { video_url: "MVL_4107", video_name: "Focus" },
  //   { video_url: "MVL_4108", video_name: "Consider" },
  //   { video_url: "MVL_4109", video_name: "Believe" },
  //   { video_url: "MVL_4110", video_name: "Agree" },
  //   { video_url: "MVL_4111", video_name: "Inform" },
  //   { video_url: "MVL_4112", video_name: "Want" },
  //   { video_url: "MVL_4113", video_name: "No reason" },
  //   { video_url: "MVL_4114", video_name: "Sure" },
  //   { video_url: "MVL_4115", video_name: "So" },
  //   { video_url: "MVL_4116", video_name: "Very" },
  //   { video_url: "MVL_4117", video_name: "Pressure" },
  //   { video_url: "MVL_4119", video_name: "Cause" },
  //   { video_url: "MVL_4120", video_name: "Happen" },
  //   { video_url: "MVL_4121", video_name: "Memory" },
  //   { video_url: "MVL_4122", video_name: "Remind" },
  //   { video_url: "MVL_4123", video_name: "Meaning" },
  //   { video_url: "MVL_4124", video_name: "Scream" },
  // ];
  
  // // Filter and map the data
  // const transformedData3 = videoData3
  //   .filter(item => item.video_name !== "")
  //   .map(item => ({
  //     video_name: item.video_name,
  //     video_url: item.video_url
  //   }));
  
  // console.log(transformedData3);
  

  
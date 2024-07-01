
const data = [
    {
      "video_name": "Sign Video 1",
      "description": "Description for Sign Video 1",
      "final_gloss": "Gloss 1",
      "video_url": "http://example.com/video1",
      "users_voted": [
        { "email": "user1@example.com", "type": "correct" },
        { "email": "user2@example.com", "type": "wrong" }
      ],
      "correctness_votes": 1,
      "wrongness_votes": 1,
      "total_votes": 2
    },
    {
      "video_name": "Sign Video 2",
      "description": "Description for Sign Video 2",
      "final_gloss": "Gloss 2",
      "video_url": "http://example.com/video2",
      "users_voted": [
        { "email": "user3@example.com", "type": "correct" },
        { "email": "user4@example.com", "type": "correct" }
      ],
      "correctness_votes": 2,
      "wrongness_votes": 0,
      "total_votes": 2
    },
    {
      "video_name": "Sign Video 3",
      "description": "Description for Sign Video 3",
      "final_gloss": "Gloss 3",
      "video_url": "http://example.com/video3",
      "users_voted": [
        { "email": "user5@example.com", "type": "correct" }
      ],
      "correctness_votes": 1,
      "wrongness_votes": 0,
      "total_votes": 1
    },
    {
      "video_name": "Sign Video 4",
      "description": "Description for Sign Video 4",
      "final_gloss": "Gloss 4",
      "video_url": "http://example.com/video4",
      "users_voted": [
        { "email": "user6@example.com", "type": "correct" },
        { "email": "user7@example.com", "type": "correct" },
        { "email": "user8@example.com", "type": "correct" }
      ],
      "correctness_votes": 3,
      "wrongness_votes": 0,
      "total_votes": 3
    },
    {
      "video_name": "Sign Video 5",
      "description": "Description for Sign Video 5",
      "final_gloss": "Gloss 5",
      "video_url": "http://example.com/video5",
      "users_voted": [
        { "email": "user9@example.com", "type": "wrong" }
      ],
      "correctness_votes": 0,
      "wrongness_votes": 1,
      "total_votes": 1
    },
    {
      "video_name": "Sign Video 6",
      "description": "Description for Sign Video 6",
      "final_gloss": "Gloss 6",
      "video_url": "http://example.com/video6",
      "users_voted": [
        { "email": "user10@example.com", "type": "correct" },
        { "email": "user11@example.com", "type": "correct" }
      ],
      "correctness_votes": 2,
      "wrongness_votes": 0,
      "total_votes": 2
    },
    {
      "video_name": "Sign Video 7",
      "description": "Description for Sign Video 7",
      "final_gloss": "Gloss 7",
      "video_url": "http://example.com/video7",
      "users_voted": [
        { "email": "user12@example.com", "type": "correct" },
        { "email": "user13@example.com", "type": "correct" },
        { "email": "user14@example.com", "type": "correct" },
        { "email": "user15@example.com", "type": "correct" }
      ],
      "correctness_votes": 4,
      "wrongness_votes": 0,
      "total_votes": 4
    },
    {
      "video_name": "Sign Video 8",
      "description": "Description for Sign Video 8",
      "final_gloss": "Gloss 8",
      "video_url": "http://example.com/video8",
      "users_voted": [
        { "email": "user16@example.com", "type": "correct" }
      ],
      "correctness_votes": 1,
      "wrongness_votes": 0,
      "total_votes": 1
    },
    {
      "video_name": "Sign Video 9",
      "description": "Description for Sign Video 9",
      "final_gloss": "Gloss 9",
      "video_url": "http://example.com/video9",
      "users_voted": [
        { "email": "user17@example.com", "type": "correct" },
        { "email": "user18@example.com", "type": "wrong" }
      ],
      "correctness_votes": 1,
      "wrongness_votes": 1,
      "total_votes": 2
    },
    {
      "video_name": "Sign Video 10",
      "description": "Description for Sign Video 10",
      "final_gloss": "Gloss 10",
      "video_url": "http://example.com/video10",
      "users_voted": [
        { "email": "user19@example.com", "type": "correct" },
        { "email": "user20@example.com", "type": "correct" }
      ],
      "correctness_votes": 2,
      "wrongness_votes": 0,
      "total_votes": 2
    },
    {
      "video_name": "Sign Video 11",
      "description": "Description for Sign Video 11",
      "final_gloss": "Gloss 11",
      "video_url": "http://example.com/video11",
      "users_voted": [
        { "email": "user21@example.com", "type": "correct" },
        { "email": "user22@example.com", "type": "wrong" },
        { "email": "user23@example.com", "type": "correct" }
      ],
      "correctness_votes": 2,
      "wrongness_votes": 1,
      "total_votes": 3
    },
    {
      "video_name": "Sign Video 12",
      "description": "Description for Sign Video 12",
      "final_gloss": "Gloss 12",
      "video_url": "http://example.com/video12",
      "users_voted": [
        { "email": "user24@example.com", "type": "wrong" }
      ],
      "correctness_votes": 0,
      "wrongness_votes": 1,
      "total_votes": 1
    },
    {
      "video_name": "Sign Video 13",
      "description": "Description for Sign Video 13",
      "final_gloss": "Gloss 13",
      "video_url": "http://example.com/video13",
      "users_voted": [
        { "email": "user25@example.com", "type": "correct" },
        { "email": "user26@example.com", "type": "wrong" }
      ],
      "correctness_votes": 1,
      "wrongness_votes": 1,
      "total_votes": 2
    },
    {
      "video_name": "Sign Video 14",
      "description": "Description for Sign Video 14",
      "final_gloss": "Gloss 14",
      "video_url": "http://example.com/video14",
      "users_voted": [
        { "email": "user27@example.com", "type": "correct" }
      ],
      "correctness_votes": 1,
      "wrongness_votes": 0,
      "total_votes": 1
    },
    {
      "video_name": "Sign Video 15",
      "description": "Description for Sign Video 15",
      "final_gloss": "Gloss 15",
      "video_url": "http://example.com/video15",
      "users_voted": [
        { "email": "user28@example.com", "type": "correct" },
        { "email": "user29@example.com", "type": "correct" },
        { "email": "user30@example.com", "type": "correct" }
      ],
      "correctness_votes": 3,
      "wrongness_votes": 0,
      "total_votes": 3
    },
    {
      "video_name": "Sign Video 16",
      "description": "Description for Sign Video 16",
      "final_gloss": "Gloss 16",
      "video_url": "http://example.com/video16",
      "users_voted": [
        { "email": "user31@example.com", "type": "wrong" }
      ],
      "correctness_votes": 0,
      "wrongness_votes": 1,
      "total_votes": 1
    },
    {
      "video_name": "Sign Video 17",
      "description": "Description for Sign Video 17",
      "final_gloss": "Gloss 17",
      "video_url": "http://example.com/video17",
      "users_voted": [
        { "email": "user32@example.com", "type": "correct" },
        { "email": "user33@example.com", "type": "correct" }
      ],
      "correctness_votes": 2,
      "wrongness_votes": 0,
      "total_votes": 2
    },
    {
      "video_name": "Sign Video 18",
      "description": "Description for Sign Video 18",
      "final_gloss": "Gloss 18",
      "video_url": "http://example.com/video18",
      "users_voted": [
        { "email": "user34@example.com", "type": "correct" },
        { "email": "user35@example.com", "type": "wrong" },
        { "email": "user36@example.com", "type": "correct" }
      ],
      "correctness_votes": 2,
      "wrongness_votes": 1,
      "total_votes": 3
    },
    {
      "video_name": "Sign Video 19",
      "description": "Description for Sign Video 19",
      "final_gloss": "Gloss 19",
      "video_url": "http://example.com/video19",
      "users_voted": [
        { "email": "user37@example.com", "type": "correct" }
      ],
      "correctness_votes": 1,
      "wrongness_votes": 0,
      "total_votes": 1
    },
    {
      "video_name": "Sign Video 20",
      "description": "Description for Sign Video 20",
      "final_gloss": "Gloss 20",
      "video_url": "http://example.com/video20",
      "users_voted": [
        { "email": "user38@example.com", "type": "correct" },
        { "email": "user39@example.com", "type": "correct" },
        { "email": "user40@example.com", "type": "correct" }
      ],
      "correctness_votes": 3,
      "wrongness_votes": 0,
      "total_votes": 3
    }
  ]




async function populateStrapi(data, strapiUrl) {
    const headers = {
      'Content-Type': 'application/json'
    };
  
    for (const entry of data) {
      try {
        const response = await fetch(strapiUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ data: entry })
        });
  
        if (response.ok) {
          console.log(`Successfully created entry: ${entry.video_name}`);
        } else {
          console.error(`Failed to create entry: ${entry.video_name}, Status Code: ${response.status}, Response: ${await response.text()}`);
        }
      } catch (error) {
        console.error(`Error creating entry: ${entry.video_name}`, error);
      }
    }
  }
  
  // Define the Strapi API URL and your authentication token
  const strapiUrl = "http://localhost:1337/api/signs"; // Replace with your Strapi URL

  
  // Call the function
  populateStrapi(data, strapiUrl);
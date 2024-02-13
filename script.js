let now_playing = document.querySelector(".now-playing");
        let track_art = document.querySelector(".track-art");
        let track_name = document.querySelector(".track-name");
        let track_artist = document.querySelector(".track-artist");
        
        let playpause_btn = document.querySelector(".playpause-track");
        let next_btn = document.querySelector(".next-track");
        let prev_btn = document.querySelector(".prev-track");
        
        let seek_slider = document.querySelector(".seek_slider");
        let volume_slider = document.querySelector(".volume_slider");
        let curr_time = document.querySelector(".current-time");
        let total_duration = document.querySelector(".total-duration");
        
        let track_index = 0;
        let isPlaying = false;
        let updateTimer;
        
        // Create new audio element
        let curr_track = document.createElement('audio');
        
        // Define the tracks that have to be played
        let track_list = [
          {
            name: "Eyy Bidda Ye Mera Adda Pushpa The Rise",
            artist: "Broke For Free",
            image: "https://i.scdn.co/image/ab67616d00001e028d3a60d936ba8518ae758187",
            path: "song/Eyy Bidda Ye Mera Adda Pushpa The Rise 320 Kbps.mp3"
          },
          {
            name: "DIVINE - 3_59 AM  Prod.",
            artist: "Tours",
            image: "https://i.scdn.co/image/ab67616d00001e0283c726c3768d0981c76acd38",
            path: "song/DIVINE - 3_59 AM  Prod. by Stunnah Beatz  Official Music Video.mp3"
          },
          {
            name: "Apna Bana Le Mashup",
            artist: "Jay Guldekar  Arijit Singh",
            image: "https://i.scdn.co/image/ab67616d00001e02c7b32b2ebd1ed948c9e7e5c5",
            path: "song/Apna Bana Le Mashup  Jay Guldekar  Arijit Singh  Phir Kabhi  Tu Hi Yaar Mera  Trending Mashup.mp3",
          },
        
          {
            name: "Sooraj Dooba Hain",
            artist: "Arijit singh Aditi Singh",
            image: "https://i.scdn.co/image/ab67616d00001e02f6371011af4c82fb31d54820",
            path: "song/'Sooraj Dooba Hain' FULL VIDEO SONG  Arijit singh Aditi Singh Sharma  T-SERIES.mp3",
          },
          {
            name: "Pehle Bhi Main",
            artist: "Vishal M,Raj S Bhushan K",
            image: "https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9",
            path: "song/ANIMAL_Pehle Bhi Main(Full Video)  Ranbir Kapoor,Tripti Dimri Sandeep V Vishal M,Raj S Bhushan K.mp3",
          },
          {
            name: "SATRANGA",
            artist: "Arijit,Shreyas",
            image: "https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9",
            path: "song/ANIMAL_ SATRANGA(Song) Ranbir Kapoor,RashmikaSandeep VArijit,Shreyas P,Siddharth-Garima Bhushan K.mp3",
          },
          {
            name: "Halamithi Habibo ",
            artist: "Anirudh ",
            image: "https://i.scdn.co/image/ab67616d00001e022452238653ac7240b3b5dad0",
            path: "song/Halamithi Habibo - Beast 320 Kbps.mp3",
          },
          {
            name: "Days Gone - Trailer_Main Theme",
            artist: "",
            image: "https://i.scdn.co/image/ab67616d00001e025ba5108caf38e768a4e04e5d",
            path: "song/Days Gone - Trailer_Main Theme - Acoustic Guitar Cover.mp3",
          },
          {
            name: "Keejo Kesari Ke Laal",
            artist: "",
            image: "https://i.scdn.co/image/ab67616d00001e0206741ea83e86463b396eb249",
            path: "song/Keejo Kesari Ke Laal _ Jai Shree Ram _ Dj Karan Kahar.mp3",
          },
          {
            name: "Pappi Jhappi",
            artist: "",
            image: "https://i.scdn.co/image/ab67616d00001e02331bf0efef5f657e6219e1dd",
            path: "song/128-Pappi Jhappi - Govinda Naam Mera 128 Kbps.mp3",
          },
          {
            name: "295 (Official Audio) ",
            artist: "Sidhu Moose Wala",
            image: "https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae",
            path: "song/295 (Official Audio)  Sidhu Moose Wala  The Kidd  Moosetape.mp3",
          },
          {
            name: "Aale Marathe ",
            artist: "Devdutta Baji",
            image: "https://i.scdn.co/image/ab67616d00001e02731bd754bdbfc4056eb7f402",
            path: "song/Aale Marathe आल मरठ   Lyrical Song  Digpal Lanjekar  Devdutta Baji  Subhedar सभदर  ऑगसट.mp3",
          },
          {
            name: " On My Way",
            artist: "Alan Walker, Sabrina Carpenter & Farruko ",
            image: "https://i.scdn.co/image/ab67616d00001e02d2aaf635815c265aa1ecdecc",
            path: "song/Alan Walker, Sabrina Carpenter & Farruko  - On My Way.mp3",
          },
          {
            name: "Current Laga Re",
            artist: "",
            image: "https://i.scdn.co/image/ab67616d00001e02324f79540ef24bb2e34be5db",
            path: "song/Current Laga Re - Cirkus 320 Kbps.mp3",
          },
          {
            name: "Oo Bolega Ya Oo Oo Bolega ",
            artist: "Kanika Kapoor",
            image: "https://i.scdn.co/image/ab67616d00001e0257e724ee71e9500dacb1754f",
            path: "song/Oo Bolega Ya Oo Oo Bolega Pushpa The Rise 320 Kbps.mp3",
          },
          {
            name: "Mehram",
            artist: "Sachet Tandon",
            image: "https://i.scdn.co/image/ab67616d00001e02739eb1455bd23b7372f76e74",
            path: "song/Mehram.mp3",
          },
          {
            name: "Namo Namo ",
            artist: "Amit Trivedi",
            image: "https://i.scdn.co/image/ab67616d00001e02c65eb44f9039e006247ef8f7",
            path: "song/Namo Namo Kedarnath 320 Kbps.mp3",
          },
          {
            name: "Saari Duniya Jalaa Denge",
            artist: "B Praak",
            image: "https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9",
            path: "song/Saari Duniya Jalaa Denge.mp3",
          },
          {
            name: "Naacho Naacho",
            artist: "Vishal Mishra",
            image: "https://i.scdn.co/image/ab67616d0000b2734c30b2c8eaa6ed1b01c518a6",
            path: "song/Naacho Naacho Rrr 2021 320 Kbps.mp3",
          },
          {
            name: " Vaathi Coming ",
            artist: "Anirudh",
            image: "https://i.scdn.co/image/ab67616d00001e0232f43d2b7862589792370786",
            path: "song/Master - Vaathi Coming Video  Thalapathy Vijay  Anirudh Ravichander  Lokesh Kanagaraj.mp3",
          },
        ];
        
        function loadTrack(track_index) {
          clearInterval(updateTimer);
          resetValues();
        
          // Load a new track
          curr_track.src = track_list[track_index].path;
          curr_track.load();
        
          // Update details of the track
          track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
          track_name.textContent = track_list[track_index].name;
          track_artist.textContent = track_list[track_index].artist;
          now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
        
          // Set an interval of 1000 milliseconds for updating the seek slider
          updateTimer = setInterval(seekUpdate, 1000);
        
          // Move to the next track if the current one finishes playing
          curr_track.addEventListener("ended", nextTrack);
        
          // Apply a random background color
          random_bg_color();
        }
        
        function random_bg_color() {
        
          // Get a random number between 64 to 256 (for getting lighter colors)
          let red = Math.floor(Math.random() * 256) + 64;
          let green = Math.floor(Math.random() * 256) + 64;
          let blue = Math.floor(Math.random() * 256) + 64;
        
          // Construct a color withe the given values
          let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
        
          // Set the background to that color
          document.body.style.background = bgColor;
        }
        
        // Reset Values
        function resetValues() {
          curr_time.textContent = "00:00";
          total_duration.textContent = "00:00";
          seek_slider.value = 0;
        }
        
        function playpauseTrack() {
          if (!isPlaying) playTrack();
          else pauseTrack();
        }
        
        function playTrack() {
          curr_track.play();
          isPlaying = true;
        
          // Replace icon with the pause icon
          playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
          curr_track.pause();
          isPlaying = false;
        
          // Replace icon with the play icon
          playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
        }
        
        function nextTrack() {
          if (track_index < track_list.length - 1)
            track_index += 1;
          else track_index = 0;
          loadTrack(track_index);
          playTrack();
        }
        
        function prevTrack() {
          if (track_index > 0)
            track_index -= 1;
          else track_index = track_list.length;
          loadTrack(track_index);
          playTrack();
        }
        
        function seekTo() {
          seekto = curr_track.duration * (seek_slider.value / 100);
          curr_track.currentTime = seekto;
        }
        
        function setVolume() {
          curr_track.volume = volume_slider.value / 100;
        }
        
        function seekUpdate() {
          let seekPosition = 0;
        
          // Check if the current track duration is a legible number
          if (!isNaN(curr_track.duration)) {
            seekPosition = curr_track.currentTime * (100 / curr_track.duration);
            seek_slider.value = seekPosition;
        
            // Calculate the time left and the total duration
            let currentMinutes = Math.floor(curr_track.currentTime / 60);
            let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(curr_track.duration / 60);
            let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
        
            // Adding a zero to the single digit time values
            if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        
            curr_time.textContent = currentMinutes + ":" + currentSeconds;
            total_duration.textContent = durationMinutes + ":" + durationSeconds;
          }
        }
        
        // Load the first track in the tracklist
        loadTrack(track_index);
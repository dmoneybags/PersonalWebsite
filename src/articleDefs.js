import { makeArticle } from "./index.js";
import goalImage1 from "./content/Goals.jpeg";
import workImage from "./content/WorkImage.jpeg";
import rewardImage from "./content/Rewards.jpeg";
import PLTWImage from "./content/PLTW.jpeg";
import LogoImage from "./content/Logo.png";
import AppVideo from "./content/app.mp4";
import ECGImage from "./content/ECGNET.png";
import Image2048 from "./content/2048.jpeg";
import pkmnImage from "./content/pkmnCode.png";
export const GoalData =     makeArticle("Goals", "Self Improvement", 
                            "I think becoming a successful person is much more than simply achieving success. I always prioritize \
                            putting myself in a position to be successful, over success itself. This is why I'm constantly focused \
                            on learning new skills and expanding my expertise. My goal in this isn't to learn everything and be an \
                            all knowing genius, but rather to keep learning my entire life. I also try to challenge myself with what \
                            I learn. Javascript frameworks have always seen extremely complex to me, but after working up the motivation \
                            to tackle the challenge, I feel like a much stronger programmer.", 
                            "Internship", 
                            "My current main goal is to work as an intern over the summer. I feel that this experience will be a great \
                            way for me to work on my collaboration skills and learn more practical business skills. I am mainly looking \
                            to join a business focused team. Some sectors I am interested in are: cybersecurity, distributed systems, \
                            machine learning, and embedded systems.", goalImage1, '', '', "The view from Bel Gatos hills, April 22nd, 2021",
                            '','');
export const WorkData =     makeArticle("Work Experience", "Office Depot: Sales Advisor, July 2020 - September 2020",
                            "While I have worked many other odd jobs before (Hardware Store, Jersey Mikes), I will start \
                            here as I feel that its pertinent to my current goals. I began working at Office Depot as I \
                            knew that working so close to workplace technology would teach me valuable lessons in sales and technology. \
                            Most of my job at this point consisted of helping customers find items, educating customers on solutions, and \
                            stocking items.",
                            "Office Depot: Solutions Advisor, September 2021 - May 2021",
                            "After being promoted to shift lead, I would manage a team of around 6 people and make sure all activities \
                            were taken care of. I often trained new employees, serviced laptop and desktop computers, and supervised larger ticket sales. \
                            Throughout this work experience I learned many lessons on business communication, computer hardware, and team collaboration.",
                            workImage, '', '', "The palm trees outside of the Office Depot, February 2021", "The leaderboard for reward card sign ups \
                            which I often excelled within.", '')
export const PLTWData =     makeArticle("Project Lead The Way", "Background",
                            "Project Lead The Way is an Ammerican nonprofit organization which provides oppurtunities in STEM \
                            education and practical experience to high school students. I joined the initiative in 2018 was able \
                            to visit microchip fabs, work with professional engineers, and design products on a high level. \
                            This experience pushed me to pursue a career close to engineering and was one of the more formative \
                            events of my adolescence.", "Projects", 
                            "Our first project involved the use of flexible PCB, and our idea was to create a “Smart-Pacifier”. The pacifier contained a small resistor connected to a Bluetooth module and a microprocessor. The resistor would allow for temperature readings to be sent via Bluetooth to a companion iPhone app, so parents could know when their infant had a fever. The second project involved the use of 3D printing, so we decided to make an updated design of a traditional finger splint. The device consisted of three 3D printed sections, one for each bone within the finger. The sections could interconnect and be set to be locked or unlocked. This allowed users to allow movement between uninjured joints but lock injured joints for recovery.",
                            PLTWImage, '', '', "My group and I at the project faire, May 2019")
export const HatcheryData = makeArticle("Project Hatchery", "Background", "Project Hatchery is an extracirricular club within Cal \
                            Poly Pomona in which students can apply for funding for an innovative idea. \
                            In order to recieve this funding students must complete preliminary research, create actionable goals, \
                            and form a complete budget.", "Apollo",
                            "Myself and my close friend decided to attempt to create an IOT device which would provide users with real time blood pressure info. \
                            Our device uses an oximeter, an algorithim hub (microprocessor), an accelerometer, and a bluetooth chip. So far we plan to produce two \
                            form factors, one in the form of a silicon ring with an embedded soft PCB, and a band with a plastic box containing a hard PCB. \
                            These products are named the Apollo Ring and Apollo Band specifically. The statistics provided to the user through the device are \
                            heart rate, SPO2, and blood pressure data. We're mostly focusing on our ability to provide users with accurate \
                            blood pressure data through cutting edge algorithms because we feel that the market is large enough for us to make an impact. \
                            We also feel that the traditional cuff is a large enough pain point to convince users to switch to our much more \
                            modern product. So far we have sourced components for a prototype PCB (being constructed right now in China), \
                            developed a fully functional prototype app, and written all the bluetooth and oximeter C code for the system.",
                            LogoImage, '', AppVideo, "Our updated logo", '', "A demonstration of the app")
                            export const EcgData =      makeArticle((<div>
                                <p>ECGNET</p>
                                <a href = "https://github.com/dmoneybags/ECGNET">Github</a>
                            </div>), "Background", (<p>ECGNET is my own clever name for an ECG 
                            classification convolutional neural net. The net is trained on a database 
                            collected in this <a href = "https://www.nature.com/articles/s41597-020-0386-x">study</a>,
                            and is able to effectively classify heart rhythms based on data from a 12 lead ECG. 
                            The net is built by having a matrix of weights run over the ECG matrix [12 leads, num samples] 
                            generating activatons which the next layers weights are run over. Eventually those weights are flattened 
                            and then passed to a fully connected dense layer and then sent to a softmax layer representing classification. 
                            After all that jargon, the net was able to achieve 85% accuracy after 5 epochs. Project was coded with Python using Tensorflow, Pandas, and Numpy.
                            </p>), "Lessons Learned", 
                            "Some lessons I learned when coding \
                            this project were, the importance of preprocessing and net depth. In my first training attempt, the net would get \
                            halfway through an epoch before all weights went to Nan and the net became unusable. At first I thought this was an issue of \
                            exploding gradients or a learning rate too large, but the actual issue was something much simpler. \
                            One of my samples simply had a Nan value within it, and as backpropagation relies on derivative \
                            calculation, any derivative calculation involving Nan will turn into Nan and cause my model to become \
                            useless. This caused me to invest more into unit testing for my input data and eliminate any unusable samples. \
                            The importance of proper network depth was also a takeaway I still think about to this day. Originally, \
                            I made my net as large as possible, with over 20 layers, but the net effectively failed to train. It wasn't until \
                            I eliminated some layers and created a smaller net. While complex problems require deep nets, a net which is too deep \
                            will either overcomplicate training or fail to train in the first place.", ECGImage, '', '', 'The code for the model', '', '')
export const Data2048 =     makeArticle((<div>
                                <p>2048 Reinforcement Learning AI</p>
                                <a href = "https://github.com/dmoneybags/2048">Github</a>
                                <script>
                                    document.querySelector('video').defaultPlaybackRate = 3.0;
                                </script>
                            </div>), 
                            "Architecture", 
                            "2048 is a number game in which an agent has 4 actions, up, down, left, and right. Each action \
                            shifts all tiles in the chosen direction, with equal tiles combining and forming a tile with twice \
                            the value and generates a new tile of 2 or 4. I felt this game would be perfect for machine learning because it is fairly simple \
                            , easy to represent numerically, and involves a simple optimal strategy. I chose an Actor-Critic method \
                            for the main architecture of the net. Actor-Critic has become my favorite method for reinforcement learning \
                            because it is fairly simple, involves state evaluation, and gives the programmer good visibility on how \
                            the net interprets the game. The state is represented by turning each value into a binary representation of the tile \
                            (16 bit so 4 turns into 00000000 00000011). I chose to do this because a binary representation or one-hot-encoding \
                            as it is often called, works better for data which is categorical. I created my own version of the game using a 2d \
                            array and encoded each action to an integer which the net would output. After training for 60000 games the net was able \
                            to reach 512 on an average game and 2048 on its best game. All code written in Python using libraries of \
                            Tensorflow, Numpy, and Selenium (for playing in browser).",
                            "Lessons Learned",
                            "This is definitely a project I intend to return to in the future. Theoretically, an efficient algorithm \
                            (machine learning or not) should be able to reach a score far higher than 2048 within the game, as the strategy is constant.\
                            I think a problem I was running into was that the critic was being trained far too quick. To explain further \
                            the critic would learn the expected return when the net was playing at a certain efficiency but once the actor started \
                            playing at a higher level and reaching exponentially larger returns, critic training would become unstable \
                            . If I was to tune my training, I would change my rewards to be smoother, even among the higher levels. I would \
                            also attempt to implement monte carlo rollouts, similar to alphaGo and alphaZero.", Image2048,
                            '', '', 'The graph of rewards for the model', '', '')
export const PkmnData =     makeArticle((<div>
                                            <p>Pokemon Ai</p>
                                            <a href = "https://github.com/dmoneybags/2048">Github</a>
                                        </div>), "Background", 
                            "Creating a Pokemon playing AI has always been a goal of mine. Unfortunately, it's extremely complex. \
                            From the intricacies of the mind games humans play, to the number of valid states, to the raw number of variables \
                            present within a state, it is extremely difficult. This is my third iteration of an adversarial net \
                            to play the game, made much easier by the javascript library provided by Pokemon Showdown. The basic setup of my algorithm \
                            is to set up two random nets, play them against each other, give a reward of 1 to the winner, 0 to the loser, and compute backprop to edit the nets. \
                            This architecture worked well towards the start, and created nets which were able to beat a random player 99% of the time, \
                            and a max damage player 65% of the time. Unfortunately, this seemed to be a ceiling of my method, and the nets failed to improve \
                            after this point. Going forward, I'm attempting to gather move data from top level players, and give the nets hot start training \
                            by having it guess those moves. All code written in Python using libraries of pExpect, Tensorflow, Pandas, and Numpy.", '', '', pkmnImage, '', '', "A sample of my code from the project",
                            '','')

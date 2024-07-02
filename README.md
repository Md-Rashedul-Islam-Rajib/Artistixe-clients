
# Artistixe Web Store Ltd


Live site:

- [Artistixe Web Store Ltd](https://assignment-10-74c04.web.app/)


Overview: <br /> <br/>
Artistixe Web Store Ltd is an interactive portfolio showcasing various forms of art. It allows users to explore a diverse range of artistic creations and offers the option to purchase artworks directly through the platform.


Technologies Used:

-Front End : React, Tailwind CSS
-Back End : ExpressJs, NodeJs
-Data Base : MongoDB



features:

- Static Navbar with dynamic routing destination of this site
- Gallery of various categories of different art and craft related to painting and drawing in the home page
- You can create account by your email and password
- You can login with your created account information and also login with google and github account
- You can select any category from homepage and know how many crafts of that category holds our store 
- You can see details any of our craft in this web store 
- You can also add your craft to our store if you have any 
- You can find the ticket of exhibition what we organize 
- You can see our partners who helps to make those craft

Resources:

- [React Router Dom](https://reactrouter.com/en/main)
- [React Hot Toast](https://react-hot-toast.com/)
- [Swiper Slider](https://swiperjs.com/react)
- [React Hook Form](https://swiperjs.com/react)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Lottie React](https://lottiereact.com/)
- [Daisy UI](https://daisyui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Tooltip](https://react-tooltip.com/)
- [Sweet Alert 2](https://sweetalert2.github.io/)
- [Axios](https://axios-http.com/)


## How to Clone and Run

1. **Clone Repositories**
   - Clone both repositories to your computer:
     ```bash
     git clone https://github.com/Md-Rashedul-Islam-Rajib/Artistixe-clients
     git clone https://github.com/Md-Rashedul-Islam-Rajib/Artistixe-server
     ```

2. **Configure Firebase Credentials**
   - Replace your Firebase credentials and other necessary environment variables in `.env.local` file in the clients repository.

3. **Configure MongoDB Credentials**
   - Replace your MongoDB username, password, and other necessary environment variables in `.env` file in the server repository.
   - Add your localhost URL to CORS in `index.js` file in the server repository.

4. **Install Dependencies**
   - Open both the clients and server repository folders in the command line interface (CLI).
   - Install necessary npm packages by running:
     ```bash
     npm install
     ```

5. **Start the Server**
   - Navigate to the server repository folder and start the server using nodemon:
     ```bash
     cd Artistixe-server
     nodemon index.js
     ```

6. **Start the Client**
   - Navigate to the clients repository folder and start the client development server:
     ```bash
     cd Artistixe-Clients
     npm run dev
     ```

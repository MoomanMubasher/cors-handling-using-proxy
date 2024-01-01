import express from 'express';
import axios from 'axios';
// import cors from 'cors';

const server = express();
const PORT = process.env.PORT || 4000;

// server.use(cors()); // Enable CORS

server.get('/', (req, res) => {
   res.send('Hello Node JS');
});

server.get('/api/population', async (req, res) => {
   try {
      const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
      const data = response.data.data;
      console.log(data);
    // const populationData = [
    //     {
    //        "ID Nation":"01000US",
    //        "Nation":"United States",
    //        "ID Year":2021,
    //        "Year":"2021",
    //        "Population":329725481,
    //        "Slug Nation":"united-states"
    //     },
    //     {
    //        "ID Nation":"01000US",
    //        "Nation":"United States",
    //        "ID Year":2020,
    //        "Year":"2020",
    //        "Population":326569308,
    //        "Slug Nation":"united-states"
    //     },
    //     {
    //        "ID Nation":"01000US",
    //        "Nation":"United States",
    //        "ID Year":2019,
    //        "Year":"2019",
    //        "Population":324697795,
    //        "Slug Nation":"united-states"
    //     },
    //     {
    //        "ID Nation":"01000US",
    //        "Nation":"United States",
    //        "ID Year":2018,
    //        "Year":"2018",
    //        "Population":322903030,
    //        "Slug Nation":"united-states"
    //     },
    //     {
    //        "ID Nation":"01000US",
    //        "Nation":"United States",
    //        "ID Year":2017,
    //        "Year":"2017",
    //        "Population":321004407,
    //        "Slug Nation":"united-states"
    //     },
    //     {
    //        "ID Nation":"01000US",
    //        "Nation":"United States",
    //        "ID Year":2016,
    //        "Year":"2016",
    //        "Population":318558162,
    //        "Slug Nation":"united-states"
    //     },
    //     {
    //        "ID Nation":"01000US",
    //        "Nation":"United States",
    //        "ID Year":2015,
    //        "Year":"2015",
    //        "Population":316515021,
    //        "Slug Nation":"united-states"
    //     },
    //     {
    //        "ID Nation":"01000US",
    //        "Nation":"United States",
    //        "ID Year":2014,
    //        "Year":"2014",
    //        "Population":314107084,
    //        "Slug Nation":"united-states"
    //     },
    //     {
    //        "ID Nation":"01000US",
    //        "Nation":"United States",
    //        "ID Year":2013,
    //        "Year":"2013",
    //        "Population":311536594,
    //        "Slug Nation":"united-states"
    //     }
    //  ]
      res.status(200).send(data);
   } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: 'Internal Server Error' });
   }
});

server.listen(PORT, () => {
   console.log(`Server is running at port ${PORT}`);
});

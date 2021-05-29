import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Nav } from 'react-bootstrap';
import PlantCard from './plantCard';
import Header from './header';
import Navbar from './navBar';
import FicusPage from './typePages/ficusPage'
import FernPage from './typePages/fernPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function HomePage() {

    const [plants, setPlants] = useState(
        [
            {
                name: "Fiddle Leaf Fig",
                url: "https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Detail-Fiddle-Leaf-Fig-Small-1_1000x1000.jpg?v=1612031677"
            },
            {
                name: "Monstera Deliciosa",
                url: "https://cdn.shopify.com/s/files/1/0662/5489/products/Monstera_deliciosa_Swiss_Cheese_Plant_-_Pistils_Nursery.jpg?v=1609197151"
            },
            {
                name: "Rubber Plant",
                url: "https://homedepot.scene7.com/is/image/homedepotcanada/p_1001585724.jpg?wid=1000&hei=1000&op_sharpen=1"
            },
            {
                name: "Ficus Audrey",
                url: "http://images.squarespace-cdn.com/content/v1/5c1366bb1aef1d0a37de50c3/1613703186454-IVGBA5SMVG5J7PSP6ZOQ/ke17ZwdGBToddI8pDm48kKT96-mTqGc-stp-zZRIm9p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTNp7wJXdR1xX66M6thRzqrQ6_o4HcW8ZfkNO26r5aioETgZ1M0luSsj-o69URGWyw/PXL_20210218_235802912.PORTRAIT.jpg"
            },
            {
                name: "Birds of Paradise",
                url: "https://vanbelleflowers.com/wp-content/uploads/IMG_3960-1.jpg"
            },
            {
                name: "Banana Plant",
                url: "https://i.pinimg.com/736x/9b/aa/da/9baada90194f56e2e663c4789ec0c040.jpg"
            },
            {
                name: "Philodendron Birkin",
                url: "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2019/10/20200423-DSC_5998.jpg"
            },
            {
                name: "Birds Nest Fern",
                url: "https://cdn.shopify.com/s/files/1/2097/3287/products/crispy-wave_1_2000x.jpg?v=1610544812"
            },    
        ]
    )

    const [searchCriteria, setSearchCriteria] = useState("")
    // console.log({searchCriteria})

    return (
        <div>
            <Header/>
            <Navbar setSearchCriteria={setSearchCriteria} />
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/">
                        <Container>
                            <Row>
                                {plants.map((plant) => {
                                    if (searchCriteria === "") {
                                        return <PlantCard name={plant.name} url={plant.url}/>
                                    }
                                    else {
                                        if (plant.name.includes(searchCriteria)){
                                            return <PlantCard name={plant.name} url={plant.url}/>
                                        }
                                    }
                                })}
                            </Row>
                        </Container>  
                    </Route>
                    <Route path="/Ficus">
                        <FicusPage/>
                    </Route>
                    <Route path="/Ficus">
                        <FernPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
      
    )
}

export default HomePage;
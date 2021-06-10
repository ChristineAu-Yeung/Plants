import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import PlantCard from './PlantCard/PlantCard';
import Header from './header';
import Navbar from './navBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TypePage from './typePages/typePage';
function HomePage() {

	const [plants, setPlants] = useState(
		[
			{
				name: "Fiddle Leaf Fig",
				src: "https://images.unsplash.com/photo-1616220797246-f01f49dd805d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
			},
			{
				name: "Monstera Deliciosa",
				src: "https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vbnN0ZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Rubber Plant",
				src: "https://images.unsplash.com/photo-1607774786991-24c71fff4a03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1YmJlciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Ficus Audrey",
				src: "https://cdn.shopify.com/s/files/1/1595/2239/files/Ficus_Audrey_-_1200_480x480.jpg?v=1579606775"
			},
			{
				name: "Birds of Paradise",
				src: "https://vanbelleflowers.com/wp-content/uploads/IMG_3960-1.jpg"
			},
			{
				name: "Banana Plant",
				src: "https://images.unsplash.com/photo-1583068320978-8e2f7fde56f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hJTIwcGxhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Philodendron Birkin",
				src: "https://images.unsplash.com/photo-1610016025063-193600579cfc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9kZW5kcm9uJTIwYmlya2lufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Birds Nest Fern",
				src: "https://cdn.shopify.com/s/files/1/0278/4909/7295/products/BIRDSNEST_FERN_V2_1024x1024@2x.jpg?v=1576673275"
			},
		]
	)

	const [searchCriteria, setSearchCriteria] = useState("")
	// console.log({searchCriteria})

	return (
		<div>
			<Header />
			<Navbar setSearchCriteria={setSearchCriteria} />
			<BrowserRouter>
				<Switch>
					<Route exact={true} path="/">
						<Container>
							<Row>

								{plants.map((plant) => {
									if (searchCriteria === "") {
										return (
											<Col sm={6} md={4} lg={3}>
												<PlantCard name={plant.name} src={plant.src} />
											</Col>
										)
									}
									else {
										if (plant.name.includes(searchCriteria)) {
											<Col xs={6} sm={4} md={3}>
												<PlantCard name={plant.name} src={plant.src} />
											</Col>
										}
									}
								})}

							</Row>
						</Container>
					</Route>
					<Route path="/Plants">
						<TypePage />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>

	)
}

export default HomePage;
import { Container, Row, Col } from 'react-bootstrap';
import TypeCard from './typeCard';

const AllTypes = () => {

	const allTypes = [
		{
			name:"Ficus",
			photos:"https://images.unsplash.com/photo-1616173981402-3a526ec60ba2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlkZGxlJTIwbGVhZiUyMGZpZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
		},
		{
			name:"Alocasia",
			photos:"https://images.unsplash.com/photo-1571591707151-66ef4c22418e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWxvY2FzaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
		}
	]

	return (
		<Container>
			<Row className={"plantHeader"}>
				<Col xs={12}>
					<div className="title">All Plant Types</div>
				</Col>
			</Row>
			<Row>
				{
					allTypes.map((type) => {
						return (
							<Col sm={6} md={6} lg={4}>
								<TypeCard name={type.name} photos={type.photos}/>
							</Col>
						)
					})
				}
			</Row>
		</Container>
	)
}

export default AllTypes
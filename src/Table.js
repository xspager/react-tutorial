import React, {Component} from 'react'

class Table extends Component {
	render() {
		return (
		<table>
			const TableHeader = () => {
				return (
					<thread>
						<tr>
							<th>Name</th>
							<th>Job</th>
						</tr>
					</thread>
				)
			}
			const TableBody = () => {
				return (
				<tbody>
					<tr>
						<td>David</td>
						<td>janitor</td>
					</tr>
					<tr>
						<td>Mac</td>
						<td>Bouncer</td>
					</tr>
					<tr>
						<td>Dee</td>
						<td>Aspiring actress</td>
					</tr>
					<tr>
						<td>Dennis</td>
						<td>Bartender</td>
					</tr>
				</tbody>
				)
			}		
		</table>
		)
	}
}
export default Table

	const tableHeader = () => { ... }
	const TableBody = () => { ... }

	class Table extends Component {
		render() {
			return (
				<table>
					<TableHeader />
					<TableBody />
				</table>
			)
		}
	}
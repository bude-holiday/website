import { FC } from "react";
import { json, LinksFunction } from "@remix-run/node";
import styles from "@mantine/dates/styles.css?url";
import { client } from "#/client";
import { useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";
import { BookingCalendar } from "@/components/BookingCalendar/BookingCalendar";
import { Table } from "@mantine/core";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader = async () => {
	return json(await client.queries.prices({ relativePath: "prices.json" }));
};

const Bookings: FC = () => {
	const loaderData = useLoaderData<typeof loader>();
	const { data } = useTina(loaderData);
	return (
		<>
			<BookingCalendar dates={[]} />
			<Table highlightOnHover withTableBorder withColumnBorders>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>From Date</Table.Th>
						<Table.Th>To Date</Table.Th>
						<Table.Th>Price</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{data.prices.price?.map((price) => (
						<Table.Tr key={price?.startDate}>
							<Table.Td>
								<time dateTime={price?.startDate}>{price?.startDate}</time>
							</Table.Td>
							<Table.Td>{price?.endDate}</Table.Td>
							<Table.Td>{price?.price}</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</>
	);
};

export default Bookings;

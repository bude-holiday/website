import { FC } from "react";
import { json, LinksFunction, LoaderFunction } from "@remix-run/node";
import styles from "@mantine/dates/styles.css?url";
import { client } from "#/client";
import { useLoaderData } from "@remix-run/react";
import { useTina, tinaField } from "tinacms/dist/react";
import { BookingCalendar } from "@/components/BookingCalendar/BookingCalendar";
import { Table } from "@mantine/core";
import dayjs from 'dayjs';


export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader = (async () => {
	return json(await client.queries.prices({ relativePath: "prices.json" }));
}) satisfies LoaderFunction

const Bookings: FC = () => {
	const loaderData = useLoaderData<typeof loader>();
	const { data } = useTina(loaderData);
	return (
		<>
			<BookingCalendar dates={data.prices.price} />
			<Table highlightOnHover withTableBorder withColumnBorders>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>From Date</Table.Th>
						<Table.Th>To Date</Table.Th>
						<Table.Th>Price</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{data.prices.price.map((price) => (
						<Table.Tr key={price.start} data-tina-field={tinaField(data.prices, "price", 0)}>
							<Table.Td>
								<time dateTime={price.start}>{dayjs(price.start).format('DD/MM/YYYY')}</time>
							</Table.Td>
							<Table.Td data-tina-field={tinaField(price, "end")}>
								<time dateTime={price.end}>{dayjs(price.end).format('DD/MM/YYYY')}</time>
							</Table.Td>
							<Table.Td data-tina-field={tinaField(price, "price")}>£{price.price}</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</>
	);
};

export default Bookings;

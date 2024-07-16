import { FC } from "react";
import { Calendar } from "@mantine/dates";
import { day, range } from './bookingCallendar.module.css';


type BookingCalendarProps = {
	dates: ReadonlyArray<[{start: Date, end: Date, available: boolean}]>
}

export const BookingCalendar: FC<BookingCalendarProps> = ({dates}) => {
	return <Calendar getDayProps={(date) => ({
		firstInRange: true,
		lastInRange: true,
		className: range,
	})} classNames={{
		day: day
	}} />;
};

export default BookingCalendar;

import "@mantine/core/styles.css";

import {Links, Meta, Outlet, Scripts, ScrollRestoration, NavLink as RemixNavLink} from '@remix-run/react';
import { ColorSchemeScript, MantineProvider, AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function Layout({ children }: { children: React.ReactNode }) {
	const [opened, { toggle }] = useDisclosure();
	const pages = [
		{ to: "/", label: "Home" },
		{ to: "/gallery", label: "Gallery" },
		{ to: "/prices", label: "Prices" },
	];
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider>
					<AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}>
						<AppShell.Header>
							<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
						</AppShell.Header>
						<AppShell.Navbar p="md">
							{pages.map((page) => (
								<NavLink key={page.to} component={RemixNavLink} to={page.to} label={page.label} />
							))}
						</AppShell.Navbar>
						<AppShell.Main>{children}</AppShell.Main>
					</AppShell>
				</MantineProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

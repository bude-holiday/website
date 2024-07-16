import styles from "@mantine/core/styles.css?url";

import { Links, Meta, Outlet, Scripts, ScrollRestoration, NavLink as RemixNavLink, LinkProps } from "@remix-run/react";
import { ColorSchemeScript, MantineProvider, AppShell, Burger, NavLink, NavLinkProps } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
	const [opened, { toggle }] = useDisclosure();
	const links: Array<LinkProps & NavLinkProps> = [
		{ to: "/", label: "Home" },
		{ to: "/gallery", label: "Gallery" },
		{ to: "/bookings", label: "Bookings" },
		{ to: "/admin/index.html", label: "Admin", reloadDocument: true },
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
							{links.map((link) => (
								<NavLink key={`${link.to}`} component={RemixNavLink} {...link} />
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

import Head from 'next/head';
import { CSubHeader } from '~/common/components/layout';
import { ContactInfo, RegisterCare } from '~/modules/Contact';

const Contact = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CSubHeader title="Contact" />

			<ContactInfo />

			<RegisterCare />
		</>
	);
};

export default Contact;

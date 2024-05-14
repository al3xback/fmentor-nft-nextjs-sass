import Link from 'next/link';

import styles from './not-found.module.scss';

export default function NotFound() {
	return (
		<div className={styles['not-found']}>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/" className="btn btn--link">
				Return Home
			</Link>
		</div>
	);
}

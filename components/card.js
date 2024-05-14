import Link from 'next/link';
import Image from 'next/image';

import equilibriumImg from '@/assets/images/equilibrium.jpg';
import avatarImg from '@/assets/images/avatar.png';
import styles from './card.module.scss';

export default function Card() {
	return (
		<article className={styles.card}>
			<div className={styles['image-box']}>
				<Image
					src={equilibriumImg}
					width="302"
					height="302"
					alt="Equilibrium"
					priority
				/>
			</div>
			<div className={styles['content-box']}>
				<h2 className={styles.title}>
					<Link href="#" className="btn btn--link">
						Equilibrium #3429
					</Link>
				</h2>
				<p className={styles.description}>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<ul className={styles.statuses}>
					<li>
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>0.041 ETH</span>
					</li>
					<li>
						<i className="icon-clock" aria-hidden="true"></i>
						<span>3 days left</span>
					</li>
				</ul>
				<div className={styles.author}>
					<Image
						src={avatarImg}
						width="33"
						height="33"
						alt="Jules Wyvern"
					/>
					<span>
						Creation of{' '}
						<Link href="#" className="btn btn--link">
							Jules Wyvern
						</Link>
					</span>
				</div>
			</div>
		</article>
	);
}

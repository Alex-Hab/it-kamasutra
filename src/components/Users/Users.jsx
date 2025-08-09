import React from 'react';
import styles from './users.module.css'


let Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1, photoUrl: 'https://avatars.mds.yandex.net/i?id=3aa19a00e85e57bf2fa8568b7eee89e0e5a7a31e-5399233-images-thumbs&n=13',
				followed: false, fullName: "Dmitry", status: 'I am a boss', location: { city: 'Minsk', country: 'Belarys' }
			},
			{
				id: 2, photoUrl: 'https://avatars.mds.yandex.net/i?id=3aa19a00e85e57bf2fa8568b7eee89e0e5a7a31e-5399233-images-thumbs&n=13',
				followed: false, fullName: "Gavril", status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' }
			},
			{
				id: 3, photoUrl: 'https://avatars.mds.yandex.net/i?id=3aa19a00e85e57bf2fa8568b7eee89e0e5a7a31e-5399233-images-thumbs&n=13',
				followed: false, fullName: "Alexeu", status: 'I am a boss too', location: { city: 'Khabarovsk', country: 'Russia' }
			},
		])
	}

	return <div>
		{
			props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photoUrl} className={styles.userPhoto} />
					</div>
					<div>
						{u.followed
							? <button onClick={() => { props.unfollow(u.id) }}>Отписаться</button>
							: <button onClick={() => { props.follow(u.id) }}>Подписаться</button>}

					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}

export default Users;
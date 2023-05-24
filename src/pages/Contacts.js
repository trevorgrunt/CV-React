const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Контакты</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Местоположение</h2>
						<p>Улан-Удэ, Россия</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / Viber</h2>
						<p>
							<a href="tel:+79051234567">+7 (912) 577-14-83</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:pogosian.2002@mail.ru">
								pogosian2002@yandex.ru
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;
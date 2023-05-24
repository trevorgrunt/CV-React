import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Привет, меня зовут <em>Лев</em>
					</strong>
					<br /> я будущий веб-разработчик
				</h1>
				<div className="header__text">
					<p>со страстью к обучению и творчеству.</p>
				</div>
				<a href="#!" className="btn">
					Скачать портфолио
				</a>
			</div>
		</header>
	);
}

export default Header;
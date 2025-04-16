<div class="baseContainer">
	<p>Pitch</p>

	<h1>Jannes Veuger</h1>
	<h2>Low Level Engineer</h2>
	<h3>About Me</h3>
	<h4>background</h4>
	<p>
		 <!--20 jaar oud, geboren in 2003<br>-->
		<!--2 de jaars student computer science aan de universiteit van twente<br>-->
		2de jaars software development student bij het mediacollege Amsterdam.<br>

		daarvoor ben ik afgestudeerd bij altra college, hier heb ik mijn vwo diploma gehaald.<br>
	</p>
	<h4>About Me</h4>


	<!--<p>currently studying computer science at the university of twente</p>-->
	<!--<p>I'm a low level engineer with a passion for creating efficient and effective solutions. I have experience in various programming languages and technologies, and I'm always looking to learn more.</p>-->
	<h3>projects</h3>
	<h4>textBasedAdventureGameFramework</h4>
	<div>
		<p>
			a program to which you give all storylines defined in a json file,<br>
			then you can play through a text based adventure game<br>
		</p>

	 	<img src="Json.png"><p>recursively go through the storyline</p><img src="Recursion.png" alt="aaaa">
	</div>





	<div class="filler"></div>
</div>

<style>
	.baseContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
		position: relative;
		left: 50%;
		translate: -50%;
		padding: var(--page-spacing);
		z-index: 0;
	}

	h1 {
		margin: 0;
		margin-top: var(--page-spacing);
	}

	img {
		width: 100%;
	}
	.filler {
		width: 100%;
		height: 100px;
		background-color: #000;
	}
</style>
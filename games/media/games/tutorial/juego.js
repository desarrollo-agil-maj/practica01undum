// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Un día cualquiera en la Universidad de Jaén</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Buenos días, exitoso estudiante de ingeniería informática.</p>\
        \
        <p> Esperamos que estés preparado para un largo y rutinario (o no) día en la universidad de jaén</p>\
        \
		 <p> Lo primero es lo primero... sal de la cama y vístete que vamos a la aventura</p>\
		 \
		 <p> A continuación elige el método de transporte para ir a la universidad</p> \
        <p class='transient'>Click <a href='hub'>aquí\
        para continuar...</a></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["opción"],
        optionText: "",
        displayOrder: 1
    }),
		
    links: new undum.SimpleSituation(
        "<p>Al ver que son las 10.30 de la mañana y que es demasiado pronto para despertarte, quitas la alarma de tu xiaomi, te das la vuelta y te vuelves a dormir.</p>\
        \
        <p>Pero como eres el tío con más mala suerte del mundo, resulta que ese día en la universidad ha estado repartiendo redbulls en la puerta de la biblioteca y además Victor, el profesor de Desarroll Ágil, ha dado un aprobado general con un 9.5 a todos los que han asistido hoy a clase y los que no han ido tienen un -7 al comenzar el examen de Mayo, por lo tanto, tienes Ágil suspenso. </p>\
        \
        <p>Ante semejante decepción al no recibir los redbulls (porque suspender a estas altura de la vida te da ya un poco igual) decides no seguir estudiando nunca más por lo que te metes en Magisterio</p>\
        \
        <p class='transient'>Aún estas a tiempo de no entrar en magisterio pincha <a href='hub'>aquí</a> y vuelve a la elección de vehículo..</p>",
        {
            heading: "Pasas de todo y te quedas durmiendo",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    sticky: new undum.SimpleSituation(
        "\ <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
		<p>Sales de casa decidido a coger el autobús. Llegas a la parada y esperas...</p>\
        \
       \
        <p>5 minutos...</p>\
        \
		\
        <p>Sigues esperando... 10 minutos...</p>\
        \
		\
        <p>Esperas... 15 minutos...</p>\
        \
		\
        <p>30 minutos...</p>\
        \
		\
        <p>Cuando llevas media hora en la parada recuerdas que vives en Jaén, la ciudad sin ley, y que el sistema de autobuses no funciona lo bien que debería. Puedes tomar dos opciones:</p>\
        \
        <p>Al ver que el autobús no viene decides\
        <a href='oneshot'>volverte a casa</a> ya que piensas que podrías estar echandote un Fortnite en vez de estar ahí plantado.</p>\
		<p>Confías en tu asombrosa forma física y decides \
        <a href='oneshot1'>ir a la universidad andando</a> porque en tus tiempos mozos ibas al colegío a patita y piensas que puedes volver a hacerlo.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Decides bajar en autobús"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>Llegas a casa pensando en las partidas que te vas a echar pero al entrar a casa tienes un problema:</p>\
        <p>Tu madre. Esa señora que no se fue de tu casa cuando le dijiste que querías vivir de forma independiente.</p>\
		<p> Con sus habilidades de ninja te lanza la zapatilla nada m.as escuchar la puerta a la vez que te grita NIÑO QUE HACES AQUÍ YA?!?!\
		<p> Te das cuenta de que la has cagado. Aún estás a tiempo de no recibir el zapatillazo. Pulsa \
        <a href='hub'>aquí</a> para volver a la elección de vehículo.</p>",
        {
            actions: {
                "one-time-action": "<p>	</p>"
            }
        }
    ),
	 oneshot1: new undum.SimpleSituation(
	"<p>Pero vamos a ver, ¿tú que te creías? ¿pensabas que los chupitos de jagger del sábado no te iban a pasar factura?</p>\
        <p>Pues ahí lo tienes, no llevas ni 2 minutos andando y te da un pinchazo en el costado que no te deja ni respirar.</p>\
		<p>Ante semejante tesitura decides <a href='oneshot'>volverte a casa</a> ya que en el fondo sabías que nunca llegarías a tiempo. Y además tienes una partida de la play pendiente. </p>",
		{
            actions: {
                "one-time-action": "<p>	</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Te preparas para ir andando a la universidad, es aquello para lo que has entrenado tanto durante toda tu vida. Crees que lo puedes conseguir, ya has hecho fechorías peores (recuerda aquella vez que subiste desde Kharma a las 5 de la mañana un poco mareaillo)</p>\
        \
		<p> Si pudiste hacerlo ese día, hoy puedes, sin embargo para no fallar en tu misión de llegar a la universidad decides <a href='quality-types'>tomarte un redbull</a>, que por todo el mundo es conocido que te da alas.</p> ",
        {
            heading: "Ir andando",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
               
            },
            exit: function(character, system, to) {
                system.setQuality("velocidad", character.qualities.velocidad+100);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>------------------------------------------------------------------ </p>\
		<p>El redbull no solo te ha dado alas, también te ha subido la velocidad 100 puntos!!</p>\
        \
        <p> Te sientes eufórico, ¡¡podrás llegar a tiempo a clase!!</p>\
        \
        <p>Inicias tu caminata a toda velocidad, pero de pronto comienzas a sudar y a sentirte bastante mal. Notas que tu corazón va a mil por hora y te das cuenta que no fue muy buena idea tomar redbull por la mañana.\
		<p>Empiezas a ir muy lento, ¡hasta las abuelillas te adelantan!. De un momento a otro se te nubla la vista y caes redondo al suelo</p>\
		<p>Te despiertas en el hospital después de haber estado inconsciente durante unas horas, piensas ¡bien, ya no tendré que ir esta semana a clase!</p>\
		<p> De repente llaman a tu puerta y aparece Victor, el profesor de Desarrollo Ágil, pero no trae buenas noticias... Resulta que no has estado unas horas inconsciente, has estado tres meses en coma y viene a decirte que has suspendido la asignatura...</p>\
		<p> Aún estás a tiempo de no pasar por el hospital y suspender Desarrollo Ágil, pulsa \
        <a href='hub'>aquí</a> para volver a la elección de vehículo.</p>",
		
    ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
		
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Coger 'prestado' el coche a tu madre"
    }),

    "colacao": new undum.SimpleSituation(
        "<p>Tu sueño ha aumentado<span class='transient'>, fíjate en\
        la lista de opciones de tu personaje.</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("sueño", character.qualities.sueño+1)
                system.doLink('example-choices');
            },
            optionText: "Cola-Cao calentito",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.sueño < 4;
            }
        }
    ),
    "greencola": new undum.SimpleSituation(
        "<p>Tu sueño ha disminuido<span class='transient'>, fíjate en\
        la lista de opciones de tu personaje</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("sueño", character.qualities.sueño-1)
                system.doLink('example-choices');
            },
            optionText: "GreenCola fresquita",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.sueño > -2;
            }
        }
    ),
	"cafe": new undum.SimpleSituation(
        "<p>Tu sueño ha disminuido<span class='transient'>, fíjate en\
        la lista de opciones de tu personaje</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("sueño", character.qualities.sueño-1)
                system.doLink('example-choices');
            },
            optionText: "Café con leche",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.sueño > -4;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>¡Enhorabuena!</h1>\
        <p>Has decidido bajar en tu SUPER patinete Xiaomi to tuneado, tiene leds por todas partes y es capaz de alcanzar los 80kmh; antes pillaba 120kmh pero desde que te comiste aquella traicionera farola decidiste bajarle un poco la potencia. </p>\
        \
		<img src='media/img/scooter.png' class='float_right'>\
			<p>Has llegado sin problema a clase, tu profesor de Desarrollo Ágil está muy contento contigo porque has sido bastante puntual, tus otros compañeros han elegido las otras opciones así que eres el único que ha llegado vivo. Estáis Victor y tú a solas en clase, después de varios silencios incómodos se levanta, se acerca a tu mesa, te mira a los ojos y te susurra: <em>enhorabuena, tienes un 10 en la asignatura.</em></p>\
        <h1>FINAL</h1>",
        {
            tags: ["topic"],
            optionText: "Patinete Xiaomi Pro",
            displayOrder: 4,
            enter: function(character, system, from) {
                system.setQuality("notaDesarrolloAgil", 10);
                system.setCharacterText(
                    "<p>¡Bien! Serás capaz de llegar a tiempo con tu super patinete Xiaomi.</p>"
                );
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    velocidad: new undum.IntegerQuality(
        "Velocidad", {priority:"0001", group:'stats'}
    ),
    sueño: new undum.FudgeAdjectivesQuality(
        "Sueño", {priority:"0002", group:'stats'}
    ),

    notaDesarrolloAgil: new undum.NonZeroIntegerQuality(
        "Nota en Desarrollo Ágil", {priority:"0001", group:'progress'}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progreso', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.velocidad = 5;
    character.qualities.sueño = 0;
    character.qualities.notaDesarrolloAgil = 0;
    system.setCharacterText("<p>¡Empieza tu increible aventura!</p>");
};

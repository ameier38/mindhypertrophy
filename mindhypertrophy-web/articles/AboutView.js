const content = (
    <div className="CardContent">
        <blockquote>
            <p>
                <i>Hypertrophy:</i> excessive development of an organ or part; 
                exaggerated growth or complexity
            </p>
            <footer>Merriam-Webster</footer>
        </blockquote>
        <p>
            Hello! I created this blog because I wanted a fun and interesting way to improve my writing 
            and learn about new things. One of the best ways to learn, in my opinion, is to teach what 
            you are trying to learn. If you can explain something simply and clearly to someone else, 
            then you probably have a pretty good understanding of the subject matter. Therefore, I try
            to structure each post as a mini lesson, with someone completely unfamiliar with the subject as
            the audience in mind.
        </p>
        <blockquote className="blockquote-reverse">
            <p>"I couldn't do it. I couldn't reduce it to the freshman level. That means we don't really understand it."</p>
            <footer>Richard Feynman, on explaining why spin one-half particles obey Fermi Dirac statistics</footer>
        </blockquote>
        <p>
            All the code is hosted on GitHub <a href="https://github.com/ameier38/mindhypertrophy.git">here</a>.
            I welcome all comments on how I could improve the site. Currently exploring how to use redux...
        </p>
        <p>
            I leveraged a number of open source frameworks including:
        </p>
        <ul>
            {/*TODO: update sources*/}
            <li><a href="https://github.com/reactjs/react-router.git">React Router</a></li>
            <li><a href="https://react-bootstrap.github.io/">React Bootstrap</a></li>
            <li><a href="http://getbootstrap.com/">Twitter Bootstrap</a></li>
        </ul>         
    </div>
)
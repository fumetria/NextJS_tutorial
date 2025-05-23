<!-- // const header = document.createElement('h1');
        // const text = 'Develop. Preview. Ship.';
        // const headerContent = document.createTextNode(text);
        // header.appendChild(headerContent);
        // app.appendChild(header); -->
<!--
        function header() {
            return (<h1>Develop. Preview. Ship.</h1>)
        }
        But, wait a second. If you try to run the code above in your browser, you'll get an error. 
        To get this to work, there are two things you have to do:
        First, React components should be capitalized to distinguish them from plain HTML and JavaScript: 
        -->

```javascript
        function Header({ title }) {
            console.log(title);
            return (<h1>{title}</h1>);
        }

        function Header2(props) {
            console.log(props.title);
            return (<h1>{props.title}</h1>);
        }

        function createTitle(title) {
            if (title) {
                return title;
            } else {
                return 'Default title';
            }
        }

        function Header3({ title }) {
            return <h1>{createTitle(title)}</h1>;
        }

        function Header4({ title }) {
            return <h1>{title ? title : 'Default Title'}</h1>;
        }
        function HomePage() {
            const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

            return (
                <div>
                    <Header title="React" />
                    <Header2 title="Reactados" />
                    <Header3 title="" />
                    <Header4 title="" />
                    <ul>
                        {names.map((name) => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                </div>
            );
        }
```
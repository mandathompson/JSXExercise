const App = () => {
    return (
        <div>
            <Tweet 
                name="Amanda Thompson"
                username="mandathompson"
                date={new Date().toDateString()}
                message="#hashtagssuck"
            />
            <Tweet 
                name="Your Mother"
                username="yourMom"
                date={new Date().toDateString()}
                message="#momlife"
            />
            <Tweet 
                name="Miss Jiggles"
                username="thejiggs"
                date={new Date().toDateString()}
                message="#meow"
            />
        </div>
    );
}
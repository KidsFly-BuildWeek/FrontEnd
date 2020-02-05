import React from 'react';
import './App.css';
import New from './New'

function App() {
    return (
        <div>
            <div>
                <SavedList list={savedList} />
                <div>
                    <Route
                        exact
                        path=""
                        component={New}
                    />
                    <Route path="">
                        <Movie />
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default App;

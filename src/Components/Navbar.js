import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <div className="container">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Start </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">About </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Services </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Blogs </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Contact </a>
                            </li>                            
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }


}

export default Navbar
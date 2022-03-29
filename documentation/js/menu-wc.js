'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">spotify-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FileModule-ce18f7ae4efb171000c9c83d1edf0394358c699c9cddc81c71f4b828a2e37a320144b0f38ef9e75c93de17381a022e9d20504af752241e8cf069162fb945a20d"' : 'data-target="#xs-injectables-links-module-FileModule-ce18f7ae4efb171000c9c83d1edf0394358c699c9cddc81c71f4b828a2e37a320144b0f38ef9e75c93de17381a022e9d20504af752241e8cf069162fb945a20d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileModule-ce18f7ae4efb171000c9c83d1edf0394358c699c9cddc81c71f4b828a2e37a320144b0f38ef9e75c93de17381a022e9d20504af752241e8cf069162fb945a20d"' :
                                        'id="xs-injectables-links-module-FileModule-ce18f7ae4efb171000c9c83d1edf0394358c699c9cddc81c71f4b828a2e37a320144b0f38ef9e75c93de17381a022e9d20504af752241e8cf069162fb945a20d"' }>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TrackModule.html" data-type="entity-link" >TrackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TrackModule-e5155439cd81219dfb8a01058072f8d3f35fa225c787d1310465522ea92d6a2936d3105469bb6500e42565458672ba187fa5c36c94d535c2efd3ab49ddb4b5e9"' : 'data-target="#xs-controllers-links-module-TrackModule-e5155439cd81219dfb8a01058072f8d3f35fa225c787d1310465522ea92d6a2936d3105469bb6500e42565458672ba187fa5c36c94d535c2efd3ab49ddb4b5e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TrackModule-e5155439cd81219dfb8a01058072f8d3f35fa225c787d1310465522ea92d6a2936d3105469bb6500e42565458672ba187fa5c36c94d535c2efd3ab49ddb4b5e9"' :
                                            'id="xs-controllers-links-module-TrackModule-e5155439cd81219dfb8a01058072f8d3f35fa225c787d1310465522ea92d6a2936d3105469bb6500e42565458672ba187fa5c36c94d535c2efd3ab49ddb4b5e9"' }>
                                            <li class="link">
                                                <a href="controllers/TrackController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrackController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TrackModule-e5155439cd81219dfb8a01058072f8d3f35fa225c787d1310465522ea92d6a2936d3105469bb6500e42565458672ba187fa5c36c94d535c2efd3ab49ddb4b5e9"' : 'data-target="#xs-injectables-links-module-TrackModule-e5155439cd81219dfb8a01058072f8d3f35fa225c787d1310465522ea92d6a2936d3105469bb6500e42565458672ba187fa5c36c94d535c2efd3ab49ddb4b5e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TrackModule-e5155439cd81219dfb8a01058072f8d3f35fa225c787d1310465522ea92d6a2936d3105469bb6500e42565458672ba187fa5c36c94d535c2efd3ab49ddb4b5e9"' :
                                        'id="xs-injectables-links-module-TrackModule-e5155439cd81219dfb8a01058072f8d3f35fa225c787d1310465522ea92d6a2936d3105469bb6500e42565458672ba187fa5c36c94d535c2efd3ab49ddb4b5e9"' }>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TrackService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrackService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommentDto.html" data-type="entity-link" >CreateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTrackDto.html" data-type="entity-link" >CreateTrackDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Track.html" data-type="entity-link" >Track</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{19:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/closeicon.452f6e9c.png"},34:function(e,t,n){e.exports=n(70)},39:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(29),r=n.n(s),o=(n(39),n(1)),c=n(2),l=n(3),u=n(21),p=n(5),h=n(4),d=n(20),g=n(12),f=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).changeType=function(e){var t=a.state.cell;if("WALL"===e&&("START"===t.type||"FINISH"===t.type))return null;a.setState(Object(o.a)({},a.state,{cell:Object(o.a)({},t,{type:e})}))},a.draw=function(){if("WALL"===a.state.cell.type&&("START"===window.drawType||"FINISH"===window.drawType))return null;if(window.mousehold&&"START"!==a.state.cell.type&&"FINISH"!==a.state.cell.type){var e=a.state.cell;a.setState(Object(o.a)({},a.state,{cell:Object(o.a)({},e,{type:window.drawType})}))}},a.mouseDown=function(e){if(!window.lock){e.preventDefault();var t=a.state.cell.type;"WALL"===t?(window.drawType="NORMAL",a.changeType("NORMAL")):"START"===t?window.drawType="START":"FINISH"===t?window.drawType="FINISH":(window.drawType="WALL",a.changeType("WALL")),a.draw()}},a.state={cell:a.props.cell},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.config.rows,this.props.config.columns;var e=this.state.cell;this.state.cell.id===this.props.startCell&&this.setState(Object(o.a)({},this.state,{cell:Object(o.a)({},e,{type:"START"})})),this.state.cell.id===this.props.finishCell&&this.setState(Object(o.a)({},this.state,{cell:Object(o.a)({},e,{type:"FINISH"})}))}},{key:"shouldComponentUpdate",value:function(e,t){return this.state!==t}},{key:"componentDidUpdate",value:function(){var e=this.state.cell;this.props.updateCell(e.row,e.column,e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"grid-cell ".concat(this.state.cell.type),onMouseEnter:this.draw,onMouseDown:function(t){return e.mouseDown(t)}},i.a.createElement("div",{className:"grid-cell-background"}))}}]),n}(a.Component),m=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).defineGrid=function(e){for(var t=null,n=null,i=[],s=0;s<a.props.grid.length;s++){i[s]=[];for(var r=0;r<a.props.grid[s].length;r++){var c=a.props.grid[s][r],l=void 0===e?99999:e[s][r].gCost,u=void 0===e?null:e[s][r].prevCell;i[s][r]=Object(o.a)({},c,{gCost:l,prevCell:u}),"START"===c.type&&(i[s][r].gCost=0,t=i[s][r].id),"FINISH"===c.type&&(n=i[s][r].id)}}return{startCell:t,finishCell:n,grid:i}},a.setGCost=function(e,t){e.gCost=t;var n=Object.assign([],a.state.grid);n[e.row][e.column]=Object.assign({},e),a.setState(Object(o.a)({},a.state,{grid:n}))},a.hCost=function(e){try{var t=a.getCellByID(a.state.finishCell),n=a.state.D,i=n*Math.sqrt(2),s=e.column,r=e.row,o=t.column,c=t.row,l=Math.abs(s-o),u=Math.abs(r-c),p=a.props.config.astar.hType,h=0;return"manhatten"===p&&(h=n*(l+u)),"octile"===p&&(h=n*(l+u)+(i-2*n)*Math.min(l,u)),"euclidian"===p&&(h=Math.sqrt(Math.pow(l,2)+Math.pow(u,2))*n),h*=a.props.config.astar.hMultiplier}catch(d){return 99999}},a.fCost=function(e){return"A*"===window.algorithm?e.gCost+a.hCost(e):"Djisktras"===window.algorithm?e.gCost:"Greedy"===window.algorithm?a.hCost(e):void 0},a.getCellByID=function(e){var t=(e=(e=e.replace("CELL","")).replace("-"," ")).split(" ");return a.state.grid[parseInt(t[0])][parseInt(t[1])]},a.getNeighbors=function(e){var t=a.state.grid,n=a.state.closed,i=a.props.config,s=e.row,r=e.column,o=[],c=0!==s,l=s!==i.rows-1,u=0!==r,p=r!==i.columns-1;c&&o.push(t[s-1][r]),l&&o.push(t[s+1][r]),u&&o.push(t[s][r-1]),p&&o.push(t[s][r+1]),a.props.config.canDiag&&(c&&p&&"WALL"!==t[s-1][r].type&&"WALL"!==t[s][r+1]&&o.push(t[s-1][r+1]),c&&u&&"WALL"!==t[s-1][r].type&&"WALL"!==t[s][r-1]&&o.push(t[s-1][r-1]),l&&p&&"WALL"!==t[s+1][r].type&&"WALL"!==t[s][r+1]&&o.push(t[s+1][r+1]),l&&u&&"WALL"!==t[s+1][r].type&&"WALL"!==t[s][r-1]&&o.push(t[s+1][r-1])),o=o.filter((function(e){return"WALL"!==e.type}));for(var h=function(e){o=o.filter((function(t){return t.id!==n[e].id}))},d=0;d<n.length;d++)h(d);return o},a.setPrevCell=function(e,t){var n=Object.assign([],a.state.grid);n[e.row][e.column]=Object.assign({},n[e.row][e.column],{prevCell:t.id}),a.setState(Object(o.a)({},a.state,{grid:n}))},a.openCell=function(e){var t=Object.assign([],a.state.open);t.push(e),a.setState(Object(o.a)({},a.state,{open:t})),e.id!==a.state.startCell&&e.id!==a.state.finishCell&&window.cellRefs[e.row][e.column].changeType("OPEN")},a.closeCell=function(e){var t=Object.assign([],a.state.open),n=Object.assign([],a.state.closed);n.push(e),t=t.filter((function(t){return t.id!==e.id})),e.id!==a.state.startCell&&e.id!==a.state.finishCell&&window.cellRefs[e.row][e.column].changeType("CLOSE"),a.setState(Object(o.a)({},a.state,{closed:n,open:t}))},a.algorithm=function(){window.lock=!0,window.updateApp();var e=(new Date).getTime();a.openCell(a.getCellByID(a.state.startCell));var t=a.props.config.speed<1?100*(1-a.props.config.speed):1;console.log(t),a.astar=setInterval((function(){for(var t=function(t){for(var n=a.getCellByID(a.state.open[0].id),i=0;i<a.state.open.length;i++){var s=a.getCellByID(a.state.open[i].id);(a.fCost(s)<a.fCost(n)||a.fCost(s)===a.fCost(n)&&a.hCost(s)<a.hCost(n))&&(n=s)}if(a.closeCell(n),n.id===a.state.finishCell){a.setState(Object(o.a)({},a.state,{done:!0})),a.showPath();var r=new Date;window.stats.timeElapsed=(r.getTime()-e)/1e3,window.updateApp(),clearInterval(a.astar)}for(var c=a.getNeighbors(n),l=function(e){var t=n.row!==c[e].row&&n.column!==c[e].column?a.state.D*Math.sqrt(2):a.state.D;n.gCost+t<c[e].gCost&&(a.setGCost(c[e],n.gCost+t),a.setPrevCell(c[e],n),0===a.state.open.filter((function(t){return t.id===c[e].id})).length&&a.openCell(c[e]))},u=0;u<c.length;u++)l(u);if(0===a.state.open.length){var p=new Date;window.stats.timeElapsed=(p.getTime()-e)/1e3,window.lock=!1,window.updateApp(),clearInterval(a.astar)}},n=0;n<a.props.config.speed;n++)t()}),t)},a.showPath=function(){var e=[],t=a.getCellByID(a.state.finishCell);for(window.stats.pathLength=t.gCost,window.updateApp();t.id!==a.state.startCell;){var n=a.getCellByID(t.prevCell);e.push(n),t=n}e.reverse();var i=0;a.spAlg=setInterval((function(){var t=e[i];t.id!==a.state.startCell&&t.id!==a.state.finishCell&&window.cellRefs[t.row][t.column].changeType("PATH"),i===e.length-1&&(clearInterval(a.spAlg),window.lock=!1,window.updateApp()),i++}),20)},a.state={open:[],closed:[],D:10,done:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){for(var e=this,t=0;t<this.props.grid.length;t++)for(var n=0;n<this.props.grid[t].length;n++){var a=this.props.grid[t][n];"CLOSE"!==a.type&&"OPEN"!==a.type&&"PATH"!==a.type||window.cellRefs[t][n].changeType("NORMAL")}setTimeout((function(){e.setState(Object(o.a)({},e.state,{},e.defineGrid())),e.algorithm()}),10)}},{key:"componentDidUpdate",value:function(e){var t=this.props.grid;e.grid!==t&&this.setState(Object(o.a)({},this.state,{},this.defineGrid(this.state.grid)))}},{key:"componentWillUnmount",value:function(){clearInterval(this.spAlg),clearInterval(this.astar)}},{key:"render",value:function(){return i.a.createElement("div",null)}}]),n}(a.Component),b=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).startAlgorithm=function(t){return e.props.startAlgorithm?"A*"===t||"Djisktras"===t||"Greedy"===t?i.a.createElement(m,{grid:e.props.grid,config:e.props.config}):void 0:null},e}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(){return!window.lock}},{key:"render",value:function(){return i.a.createElement("div",null,this.startAlgorithm(window.algorithm))}}]),n}(a.Component),w=n(30),v=n.n(w),y=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).genPerlinNoise=function(){window.lock=!0;for(var t=e.props,n=t.config,a=t.grid,i=n.perlinNoise,s=new v.a.PerlinN,r=0;r<n.rows;r++)for(var o=0;o<n.columns;o++){if("START"!==a[r][o].type&&"FINISH"!==a[r][o].type)Math.abs(s.gen(o/10*i.density,r/10*i.density))>i.threshhold&&window.cellRefs[r][o].changeType("WALL")}window.lock=!1},e.initializeMaze=function(){for(var t=e.props,n=t.config,a=t.grid,i=[],s=0,r=0,c=0;c<n.rows;c++)if(c%2!==0){i[s]=[];for(var l=0;l<n.columns;l++)l%2!==0?(i[s].push(Object(o.a)({mazeRow:s,mazeColumn:r,status:"UNVISITED"},a[c][l])),r++):window.cellRefs[c][l].changeType("WALL");s++,r=0}else for(var u=0;u<n.columns;u++)window.cellRefs[c][u].changeType("WALL");return i},e.getMazeNeighbors=function(e,t){var n=e.mazeRow,a=e.mazeColumn,i=[],s=n+1<=t.length-1,r=a-1>=0,o=a+1<=t[0].length-1;return n-1>=0&&i.push(t[n-1][a]),s&&i.push(t[n+1][a]),r&&i.push(t[n][a-1]),o&&i.push(t[n][a+1]),i.length>0&&(i=i.filter((function(e){return"UNVISITED"===e.status}))),console.log(i),i},e.openMazeWall=function(t,n){var a=(t.row+n.row)/2,i=(t.column+n.column)/2;"START"!==e.props.grid[a][i].type&&"FINISH"!==e.props.grid[a][i].type&&window.cellRefs[a][i].changeType("NORMAL")},e.genRecursiveBacktrackerMaze=function(){window.lock=!0;var t=e.initializeMaze(),n=[t[0][0]],a=[];console.log(t);var i=0;e.mazeAlg=setInterval((function(){var s=n[n.length-1],r=e.getMazeNeighbors(s,t);if(0!==r.length){var o=r[Math.floor(Math.random()*r.length)];n.push(o),t[s.mazeRow][s.mazeColumn].status="INSTACK",e.openMazeWall(s,o)}else n.pop(),a.push(s),t[s.mazeRow][s.mazeColumn].status="VISITED";console.log(i),i++,0===n.length&&(window.lock=!1,window.updateApp(),clearInterval(e.mazeAlg))}),1)},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),n}(a.Component),C=(n(59),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={show:!0,redirectTo:"",redirect:!1},e.setRedirect=function(t){e.setState({redirectTo:t,redirect:!0})},e.redirect=function(){if(e.state.redirect)return e.setState(Object(o.a)({},e.state,{redirect:!1})),i.a.createElement(g.a,{to:e.state.redirectTo})},e.getShow=function(e){return e?"Show":"Hide"},e.showHideUI=function(){e.setState(Object(o.a)({},e.state,{show:!e.state.show}))},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"interface ".concat(this.getShow(this.state.show))},i.a.createElement("div",{className:"interface-header"},i.a.createElement("h1",null,"Pathfinding Visualizer"),i.a.createElement("div",{className:"interface-btns"},i.a.createElement("button",{className:"interface-btn pathfinding Greedy button",onClick:this.props.runAlgorithm.bind(this,"Greedy")}," Visualize Greedy BFS"),i.a.createElement("button",{className:"interface-btn pathfinding Djisktras button",onClick:this.props.runAlgorithm.bind(this,"Djisktras")},"Visualize Djisktras"),i.a.createElement("button",{className:"interface-btn pathfinding AStar button",onClick:this.props.runAlgorithm.bind(this,"A*")}," Visualize A*"),i.a.createElement("button",{className:"interface-btn generator button",onClick:this.props.generateMap.bind(this,"maze")}," Generate Maze"),i.a.createElement("button",{className:"interface-btn generator button",onClick:this.props.generateMap.bind(this,"perlin")}," Generate Noise Map"),i.a.createElement("button",{className:"interface-btn generator button",onClick:this.props.clearGrid}," Clear Grid"))),i.a.createElement("div",{className:"interface-stats"},i.a.createElement("p",null,"Path Length: ".concat(window.stats.pathLength.toString().substring(0,6))),i.a.createElement("p",null,"Time Elapsed: ".concat(window.stats.timeElapsed.toString().substring(0,4),"s"))),i.a.createElement("button",{className:"interface-hideuibtn",onClick:this.showHideUI},"".concat(this.getShow(!this.state.show)," UI")),i.a.createElement("button",{className:"interface-settingsbtn",onClick:this.setRedirect.bind(this,"/settings/astar")},"Settings"),this.redirect())}}]),n}(a.Component)),E=(n(19),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state=Object(o.a)({},e.props.config),e.changeHType=function(t){e.setState(Object(o.a)({},e.state,{astar:Object(o.a)({},e.state.astar,{hType:t})}))},e.getHTypeStyle=function(t){return e.state.astar.hType===t?"selected":"notselected"},e.setHMult=function(t){console.log(t.target.value/100),e.setState(Object(o.a)({},e.state,{astar:Object(o.a)({},e.state.astar,{hMultiplier:parseInt(t.target.value)/100})}))},e.setSpeed=function(t){var n=1;t.target.value<50?n=t.target.value/50:t.target.value>50&&(n=t.target.value-50+1),e.setState(Object(o.a)({},e.state,{speed:n}))},e.speedToLinear=function(){var t=e.state.speed;return t<1?50*t:t>1?t+50-1:1===t?50:void 0},e.updateConfig=function(){setTimeout((function(){e.props.setConfig(e.state)}),100)},e.toggleCanDiag=function(t){e.setState(Object(o.a)({},e.state,{canDiag:t.target.checked}))},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"settings-menu-config-container astar",onMouseUp:this.updateConfig},i.a.createElement("h1",null,"A* Options"),i.a.createElement("div",{className:"settings-menu-config-options"},i.a.createElement("label",null,"Speed - ".concat(this.state.speed)),i.a.createElement("input",{type:"range",value:this.speedToLinear().toString(),onChange:this.setSpeed.bind(this)}),i.a.createElement("label",null,"Hueristic multiplier - ".concat(this.state.astar.hMultiplier)),i.a.createElement("input",{value:(100*this.state.astar.hMultiplier).toString(),type:"range",onChange:this.setHMult.bind(this),min:"0",max:"200"}),i.a.createElement("label",null,"Diagonal Movement"),i.a.createElement("label",{className:"checkbox"},".",i.a.createElement("input",{type:"checkbox",checked:this.state.canDiag,onChange:this.toggleCanDiag.bind(this)}),i.a.createElement("span",{className:"checkbox-custom"})),i.a.createElement("label",{style:{position:"relative",top:"7%"}},"Hueristic Type"),i.a.createElement("div",{className:"settings-menu-config-container astar htypeSelect"},i.a.createElement("button",{className:"".concat(this.getHTypeStyle("manhatten")," button"),onClick:this.changeHType.bind(this,"manhatten")},"Manhatten"),i.a.createElement("button",{className:"".concat(this.getHTypeStyle("octile")," button"),onClick:this.changeHType.bind(this,"octile")},"Octile"),i.a.createElement("button",{className:"".concat(this.getHTypeStyle("euclidian")," button"),onClick:this.changeHType.bind(this,"euclidian")},"Euclidian"))))}}]),n}(a.Component)),O=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state=Object(o.a)({},e.props.config),e.setSpeed=function(t){var n=1;t.target.value<50?n=t.target.value/50:t.target.value>50&&(n=t.target.value-50+1),e.setState(Object(o.a)({},e.state,{speed:n}))},e.speedToLinear=function(){var t=e.state.speed;return t<1?50*t:t>1?t+50-1:1===t?50:void 0},e.updateConfig=function(){setTimeout((function(){e.props.setConfig(e.state)}),100)},e.toggleCanDiag=function(t){e.setState(Object(o.a)({},e.state,{canDiag:t.target.checked}))},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"settings-menu-config-container djisktras",onMouseUp:this.updateConfig},i.a.createElement("h1",null,"Djisktras Options"),i.a.createElement("div",{className:"settings-menu-config-options"},i.a.createElement("label",null,"Speed - ".concat(this.state.speed)),i.a.createElement("input",{type:"range",value:this.speedToLinear().toString(),onChange:this.setSpeed.bind(this)}),i.a.createElement("label",null,"Diagonal Movement"),i.a.createElement("label",{className:"checkbox"},".",i.a.createElement("input",{type:"checkbox",checked:this.state.canDiag,onChange:this.toggleCanDiag.bind(this)}),i.a.createElement("span",{className:"checkbox-custom"}))))}}]),n}(a.Component),j=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state=Object(o.a)({},e.props.config),e.changeHType=function(t){e.setState(Object(o.a)({},e.state,{astar:Object(o.a)({},e.state.astar,{hType:t})}))},e.getHTypeStyle=function(t){return e.state.astar.hType===t?"selected":"notselected"},e.setHMult=function(t){console.log(t.target.value/100),e.setState(Object(o.a)({},e.state,{astar:Object(o.a)({},e.state.astar,{hMultiplier:parseInt(t.target.value)/100})}))},e.setSpeed=function(t){var n=1;t.target.value<50?n=t.target.value/50:t.target.value>50&&(n=t.target.value-50+1),e.setState(Object(o.a)({},e.state,{speed:n}))},e.speedToLinear=function(){var t=e.state.speed;return t<1?50*t:t>1?t+50-1:1===t?50:void 0},e.updateConfig=function(){setTimeout((function(){e.props.setConfig(e.state)}),100)},e.toggleCanDiag=function(t){e.setState(Object(o.a)({},e.state,{canDiag:t.target.checked}))},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"settings-menu-config-container greedy",onMouseUp:this.updateConfig},i.a.createElement("h1",null,"Greedy Best First Search Options"),i.a.createElement("div",{className:"settings-menu-config-options"},i.a.createElement("label",null,"Speed - ".concat(this.state.speed)),i.a.createElement("input",{type:"range",value:this.speedToLinear().toString(),onChange:this.setSpeed.bind(this)}),i.a.createElement("label",null,"Diagonal Movement"),i.a.createElement("label",{className:"checkbox"},".",i.a.createElement("input",{type:"checkbox",checked:this.state.canDiag,onChange:this.toggleCanDiag.bind(this)}),i.a.createElement("span",{className:"checkbox-custom"})),i.a.createElement("label",{style:{position:"relative",top:"7%"}},"Hueristic Type"),i.a.createElement("div",{className:"settings-menu-config-container greedy htypeSelect"},i.a.createElement("button",{className:"".concat(this.getHTypeStyle("manhatten")," button"),onClick:this.changeHType.bind(this,"manhatten")},"Manhatten"),i.a.createElement("button",{className:"".concat(this.getHTypeStyle("octile")," button"),onClick:this.changeHType.bind(this,"octile")},"Octile"),i.a.createElement("button",{className:"".concat(this.getHTypeStyle("euclidian")," button"),onClick:this.changeHType.bind(this,"euclidian")},"Euclidian"))))}}]),n}(a.Component),S=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state=Object(o.a)({},e.props.config),e.updateConfig=function(){setTimeout((function(){e.props.setConfig(e.state)}),100)},e.setDensity=function(t){e.setState(Object(o.a)({},e.state,{perlinNoise:Object(o.a)({},e.state.perlinNoise,{density:t.target.value/40})}))},e.setThresh=function(t){e.setState(Object(o.a)({},e.state,{perlinNoise:Object(o.a)({},e.state.perlinNoise,{threshhold:t.target.value/200})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"settings-menu-config-container perlinNoise",onMouseUp:this.updateConfig},i.a.createElement("h1",null,"Perlin Noise Map Options"),i.a.createElement("div",{className:"settings-menu-config-options"},i.a.createElement("label",null,"Noise Density - ".concat(this.state.perlinNoise.density)),i.a.createElement("input",{type:"range",value:40*this.state.perlinNoise.density,onChange:this.setDensity.bind(this)}),i.a.createElement("label",null,"Generation Threshhold - ".concat(this.state.perlinNoise.threshhold)),i.a.createElement("input",{type:"range",value:200*this.state.perlinNoise.threshhold,onChange:this.setThresh.bind(this)}),i.a.createElement("p",{style:{position:"absolute",bottom:"10%"}},"Note: A higher noise density will generally need a lower generation threshhold and vice-versa")))}}]),n}(a.Component),k=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"settings-menu-config-container djisktras"},i.a.createElement("h1",null,"No available options for maze..."))}}]),n}(a.Component),T=(n(65),n(33)),N=n.n(T),A=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).exitSettings=function(){a.setState({redirectTo:"/",redirect:!0})},a.setRedirect=function(e){localStorage.setItem("selectedOption",e),a.setState({redirectTo:"/settings/".concat(e),redirect:!0})},a.redirect=function(){if(a.state.redirect)return a.setState(Object(o.a)({},a.state,{redirect:!1})),i.a.createElement(g.a,{to:a.state.redirectTo})};var s="",r=!1;return null!==localStorage.getItem("selectedOption")&&(s=localStorage.getItem("selectedOption"),r=!0),a.state={redirectTo:s,redirect:r},console.log(s),a}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"settings-container"},i.a.createElement("div",{className:"settings-menu"},i.a.createElement("div",{className:"settings-menu-header"}," ",i.a.createElement("h1",null,"Visualizer Settings")," "),i.a.createElement("div",{className:"settings-menu-selection"},i.a.createElement("button",{className:"settings-menu-selection-btn",onClick:this.setRedirect.bind(this,"astar")}," A* "),i.a.createElement("button",{className:"settings-menu-selection-btn",onClick:this.setRedirect.bind(this,"djisktras")}," Djisktras "),i.a.createElement("button",{className:"settings-menu-selection-btn",onClick:this.setRedirect.bind(this,"greedy")}," Greedy BFS"),i.a.createElement("button",{className:"settings-menu-selection-btn",onClick:this.setRedirect.bind(this,"perlinnoise")}," Noise Map "),i.a.createElement("button",{className:"settings-menu-selection-btn",onClick:this.setRedirect.bind(this,"maze")}," Maze ")),i.a.createElement("div",{className:"settings-menu-config"},i.a.createElement(g.d,null,i.a.createElement(g.b,{path:"/settings/astar"},i.a.createElement(E,{config:this.props.config,setConfig:this.props.setConfig})),i.a.createElement(g.b,{path:"/settings/djisktras"},i.a.createElement(O,{config:this.props.config,setConfig:this.props.setConfig})),i.a.createElement(g.b,{path:"/settings/greedy"},i.a.createElement(j,{config:this.props.config,setConfig:this.props.setConfig})),i.a.createElement(g.b,{path:"/settings/perlinnoise"},i.a.createElement(S,{config:this.props.config,setConfig:this.props.setConfig})),i.a.createElement(g.b,{path:"/settings/maze"},i.a.createElement(k,null)))),i.a.createElement("img",{className:"settings-close",src:N.a,alt:"",onClick:this.exitSettings})),this.redirect())}}]),n}(a.Component),L=(n(66),n(67),n(68),n(69),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).handKeyEvents=function(e){"c"===e.key&&a.clearGrid(),window.lock||("p"===e.key&&a.resetAlgorithm(),"n"===e.key&&a.generateMap("perlin"),"m"===e.key&&a.generateMap("maze"))},a.handleMouseEvents=function(e){window.lock||("mousedown"!==e.type&&"touchstart"!==e.type||(window.mousehold=!0,a.forceUpdate()),"mouseup"!==e.type&&"touchend"!==e.type||(window.mousehold=!1,a.forceUpdate()))},a.setConfig=function(e){a.setState(Object(o.a)({},a.state,{config:e}))},a.generateMap=function(e){window.lock||(a.stopAlgorithm(),a.clearGrid(),window.lock=!0,"perlin"===e&&a.genRef.current.genPerlinNoise(),"maze"===e&&a.genRef.current.genRecursiveBacktrackerMaze())},a.runAlgorithm=function(e){window.lock||(window.lock=!1,window.algorithm=e,console.log(window.algorithm),a.setState(Object(o.a)({},a.state,{startAlgorithm:!1}),(function(){a.setState(Object(o.a)({},a.state,{startAlgorithm:!0}))})))},a.stopAlgorithm=function(){window.lock=!1,a.setState(Object(o.a)({},a.state,{startAlgorithm:!1}))},a.clearGrid=function(){window.lock=!1,a.stopAlgorithm();for(var e=0;e<a.state.grid.length;e++)for(var t=0;t<a.state.grid[e].length;t++){var n=a.state.grid[e][t];"WALL"!==n.type&&"PATH"!==n.type&&"OPEN"!==n.type&&"CLOSE"!==n.type||window.cellRefs[e][t].changeType("NORMAL")}},a.updateCell=function(e,t,n){console.log("ASD");var i=Object.assign([],a.state.grid),s=a.state.startCell,r=a.state.finishCell;if(i[e][t]=n,"START"===n.type&&n.id!==s){var c=s.replace("CELL","").replace("-"," ").split(" ");window.cellRefs[c[0]][c[1]].changeType("NORMAL"),s=n.id}if("FINISH"===n.type&&n.id!==r){var l=r.replace("CELL","").replace("-"," ").split(" ");window.cellRefs[l[0]][l[1]].changeType("NORMAL"),r=n.id}a.setState(Object(o.a)({},a.state,{grid:i,startCell:s,finishCell:r}))},a.renderGrid=function(){return a.state.grid.map((function(e,t){return window.cellRefs[t]=[],i.a.createElement("div",{style:{clear:"both"},key:"row".concat(t)},e.map((function(e,n){return i.a.createElement(f,{ref:function(e){return window.cellRefs[t][n]=e},key:e.id,cell:e,updateCell:a.updateCell,changeDrawWallType:a.changeDrawWallType,config:a.state.config,startCell:a.state.startCell,finishCell:a.state.finishCell})})))}))},a.renderInterface=function(){if(!window.lock&&a.state.showInterface)return i.a.createElement(C,{config:a.state.config,setConfig:a.setConfig,runAlgorithm:a.runAlgorithm,generateMap:a.generateMap,clearGrid:a.clearGrid})};var s=Math.floor(window.innerHeight/25-window.innerHeight/25*2/25),r=Math.floor(window.innerWidth/25-window.innerWidth/25*2/25);console.log(s,r),++s%2===0&&s++,r%2===0&&r++,console.log(s,r);var l=[];window.cellRefs=[];for(var p=0;p<s;p++){l[p]=[];for(var h=0;h<r;h++)l[p][h]={id:"CELL".concat(p,"-").concat(h),row:p,column:h,type:"NORMAL"}}return a.state={config:{rows:s,columns:r,speed:1,canDiag:!0,astar:{hType:"octile",hMultiplier:1},perlinNoise:{density:1,threshhold:.22}},grid:l,startCell:"CELL".concat(Math.floor(s/2),"-1"),finishCell:"CELL".concat(Math.floor(s/2),"-").concat(r-2),startAlgorithm:!1,showInterface:!0},a.genRef=i.a.createRef(),window.updateApp=a.forceUpdate.bind(Object(u.a)(a)),window.algorithm="A*",window.drawType="NORMAL",window.stats={pathLength:0,timeElapsed:0},window.lock=!1,window.mousehold=!1,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handKeyEvents.bind(this)),document.addEventListener("mousedown",this.handleMouseEvents.bind(this)),document.addEventListener("mouseup",this.handleMouseEvents.bind(this)),document.addEventListener("touchstart",this.handleMouseEvents.bind(this)),document.addEventListener("touchend",this.handleMouseEvents.bind(this))}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.grid===t.grid&&(this.state.config,t.config,!0)}},{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"grid",style:{width:"".concat(window.innerWidth+100,"px"),height:"".concat(window.innerHeight,"px")}},this.renderGrid()),i.a.createElement(b,{grid:this.state.grid,config:this.state.config,startAlgorithm:this.state.startAlgorithm}),i.a.createElement(y,{grid:this.state.grid,config:this.state.config,ref:this.genRef}),i.a.createElement(g.d,null,i.a.createElement(g.b,{path:"/settings"},this.renderInterface(),i.a.createElement(A,{config:this.state.config,setConfig:this.setConfig})),i.a.createElement(g.b,{path:"/"},this.renderInterface()))))}}]),n}(a.Component));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d027d08d.chunk.js.map
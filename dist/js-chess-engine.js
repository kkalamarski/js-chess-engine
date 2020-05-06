!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define("js-chess-engine",[],i):"object"==typeof exports?exports["js-chess-engine"]=i():t["js-chess-engine"]=i()}(this,(function(){return function(t){var i={};function s(o){if(i[o])return i[o].exports;var e=i[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,s),e.l=!0,e.exports}return s.m=t,s.c=i,s.d=function(t,i,o){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)s.d(o,e,function(i){return t[i]}.bind(null,e));return o},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=0)}([function(t,i,s){"use strict";s.r(i),s.d(i,"Game",(function(){return w})),s.d(i,"moves",(function(){return M})),s.d(i,"status",(function(){return b})),s.d(i,"move",(function(){return k})),s.d(i,"aiMove",(function(){return v}));const o=["A","B","C","D","E","F","G","H"],e=["1","2","3","4","5","6","7","8"],r="black",l="white",h={turn:l,pieces:{E1:"K",D1:"Q",A1:"R",H1:"R",C1:"B",F1:"B",B1:"N",G1:"N",A2:"P",B2:"P",C2:"P",D2:"P",E2:"P",F2:"P",G2:"P",H2:"P",E8:"k",D8:"q",A8:"r",H8:"r",C8:"b",F8:"b",B8:"n",G8:"n",A7:"p",B7:"p",C7:"p",D7:"p",E7:"p",F7:"p",G7:"p",H7:"p"}};class n{constructor(t,i){this.chessMan=null,this.color=t,this.location=i,this.neighbours={left:null,right:null,up:null,down:null}}up(t=l){return t===l?this.neighbours.up:this.neighbours.down}down(t=l){return t===l?this.neighbours.down:this.neighbours.up}left(t=l){return t===l?this.neighbours.left:this.neighbours.right}right(t=l){return t===l?this.neighbours.right:this.neighbours.left}upLeft(t){return this.up(t)?this.up(t).left(t):null}upRight(t){return this.up(t)?this.up(t).right(t):null}downLeft(t){return this.down(t)?this.down(t).left(t):null}downRight(t){return this.down(t)?this.down(t).right(t):null}setField(t){this.chessMan&&this.removeChessMan(),t&&(t.field=this),this.chessMan=t}removeChessMan(){Object.assign(this.chessMan.field,null),Object.assign(this.chessMan,null)}isEmpty(){return null==this.chessMan}isWhite(){return this.color===l}isBlack(){return this.color===r}getUnicode(){if(!this.isEmpty())return this.chessMan.getUnicode();if(this.isBlack())return"░";if(this.isWhite())return"█";throw new Error("No unicode defined")}}class c{constructor(t){this.color=t,this.field=null,this.moved=!1}getValue(){return 0}isInGame(){return!!this.field}isWhite(){return this.color===l}isBlack(){return this.color===r}getUnicode(){throw new Error("No unicode defined")}getAlias(){throw new Error("Alias not defined")}getMoves(){throw new Error("Not implemented")}isMoveInMoves(t){return this.getMoves().includes(t)}isKing(){return!1}isRook(){return!1}isPawn(){return!1}getMovesUpAll(){const t=[];let i=this.field;for(;i.up(this.color)&&i.up(this.color).isEmpty();)i=i.up(this.color),t.push(i.location);return i.up(this.color)&&i.up(this.color).chessMan.color!==this.color&&t.push(i.up(this.color).location),t}getMovesDownAll(){const t=[];let i=this.field;for(;i.down(this.color)&&i.down(this.color).isEmpty();)i=i.down(this.color),t.push(i.location);return i.down(this.color)&&i.down(this.color).chessMan.color!==this.color&&t.push(i.down(this.color).location),t}getMovesRightAll(){const t=[];let i=this.field;for(;i.right(this.color)&&i.right(this.color).isEmpty();)i=i.right(this.color),t.push(i.location);return i.right(this.color)&&i.right(this.color).chessMan.color!==this.color&&t.push(i.right(this.color).location),t}getMovesLeftAll(){const t=[];let i=this.field;for(;i.left(this.color)&&i.left(this.color).isEmpty();)i=i.left(this.color),t.push(i.location);return i.left(this.color)&&i.left(this.color).chessMan.color!==this.color&&t.push(i.left(this.color).location),t}getMovesUpLeftAll(){const t=[];let i=this.field;for(;i.upLeft(this.color)&&i.upLeft(this.color).isEmpty();)i=i.upLeft(this.color),t.push(i.location);return i.upLeft(this.color)&&i.upLeft(this.color).chessMan.color!==this.color&&t.push(i.upLeft(this.color).location),t}getMovesUpRightAll(){const t=[];let i=this.field;for(;i.upRight(this.color)&&i.upRight(this.color).isEmpty();)i=i.upRight(this.color),t.push(i.location);return i.upRight(this.color)&&i.upRight(this.color).chessMan.color!==this.color&&t.push(i.upRight(this.color).location),t}getMovesDownRightAll(){const t=[];let i=this.field;for(;i.downRight(this.color)&&i.downRight(this.color).isEmpty();)i=i.downRight(this.color),t.push(i.location);return i.downRight(this.color)&&i.downRight(this.color).chessMan.color!==this.color&&t.push(i.downRight(this.color).location),t}getMovesDownLeftAll(){const t=[];let i=this.field;for(;i.downLeft(this.color)&&i.downLeft(this.color).isEmpty();)i=i.downLeft(this.color),t.push(i.location);return i.downLeft(this.color)&&i.downLeft(this.color).chessMan.color!==this.color&&t.push(i.downLeft(this.color).location),t}}class a extends c{getValue(){return 20}isKing(){return!0}getUnicode(){return this.isWhite()?"♚":this.isBlack()?"♔":super.getUnicode()}getAlias(){return this.isWhite()?"K":this.isBlack()?"k":super.getAlias()}getMoves(){const t=[];return this.field.up(this.color)&&(this.field.up(this.color).isEmpty()||this.field.up(this.color).chessMan.color!==this.color)&&t.push(this.field.up(this.color).location),this.field.down(this.color)&&(this.field.down(this.color).isEmpty()||this.field.down(this.color).chessMan.color!==this.color)&&t.push(this.field.down(this.color).location),this.field.left(this.color)&&(this.field.left(this.color).isEmpty()||this.field.left(this.color).chessMan.color!==this.color)&&t.push(this.field.left(this.color).location),this.field.right(this.color)&&(this.field.right(this.color).isEmpty()||this.field.right(this.color).chessMan.color!==this.color)&&t.push(this.field.right(this.color).location),this.field.upRight(this.color)&&(this.field.upRight(this.color).isEmpty()||this.field.upRight(this.color).chessMan.color!==this.color)&&t.push(this.field.upRight(this.color).location),this.field.upLeft(this.color)&&(this.field.upLeft(this.color).isEmpty()||this.field.upLeft(this.color).chessMan.color!==this.color)&&t.push(this.field.upLeft(this.color).location),this.field.downLeft(this.color)&&(this.field.downLeft(this.color).isEmpty()||this.field.downLeft(this.color).chessMan.color!==this.color)&&t.push(this.field.downLeft(this.color).location),this.field.downRight(this.color)&&(this.field.downRight(this.color).isEmpty()||this.field.downRight(this.color).chessMan.color!==this.color)&&t.push(this.field.downRight(this.color).location),t}}class u extends c{getValue(){return 9}getUnicode(){return this.isWhite()?"♛":this.isBlack()?"♕":super.getUnicode()}getAlias(){return this.isWhite()?"Q":this.isBlack()?"q":super.getAlias()}getMoves(){return[...this.getMovesUpAll(),...this.getMovesDownAll(),...this.getMovesLeftAll(),...this.getMovesRightAll(),...this.getMovesUpLeftAll(),...this.getMovesUpRightAll(),...this.getMovesDownRightAll(),...this.getMovesDownLeftAll()]}}class d extends c{getValue(){return 1}isPawn(){return!0}getUnicode(){return this.isWhite()?"♟":this.isBlack()?"♙":super.getUnicode()}getAlias(){return this.isWhite()?"P":this.isBlack()?"p":super.getAlias()}isInStartLine(){return!(!this.isWhite()||"2"!==this.field.location[1])||!(!this.isBlack()||"7"!==this.field.location[1])}getMoves(){const t=[];return this.field.up(this.color)&&this.field.up(this.color).isEmpty()&&(t.push(this.field.up(this.color).location),this.isInStartLine()&&this.field.up(this.color).up(this.color)&&this.field.up(this.color).up(this.color).isEmpty()&&t.push(this.field.up(this.color).up(this.color).location)),this.field.upLeft(this.color)&&!this.field.upLeft(this.color).isEmpty()&&this.field.upLeft(this.color).chessMan.color!==this.color&&t.push(this.field.upLeft(this.color).location),this.field.upRight(this.color)&&!this.field.upRight(this.color).isEmpty()&&this.field.upRight(this.color).chessMan.color!==this.color&&t.push(this.field.upRight(this.color).location),t}}class p extends c{getValue(){return 3}getUnicode(){return this.isWhite()?"♞":this.isBlack()?"♘":super.getUnicode()}getAlias(){return this.isWhite()?"N":this.isBlack()?"n":super.getAlias()}getMoves(){const t=[];if(this.field.up(this.color)&&this.field.up(this.color).up(this.color)){const i=this.field.up(this.color).up(this.color);i.left(this.color)&&(i.left(this.color).isEmpty()||i.left(this.color).chessMan.color!==this.color)&&t.push(i.left(this.color).location),i.right(this.color)&&(i.right(this.color).isEmpty()||i.right(this.color).chessMan.color!==this.color)&&t.push(i.right(this.color).location)}if(this.field.down(this.color)&&this.field.down(this.color).down(this.color)){const i=this.field.down(this.color).down(this.color);i.left(this.color)&&(i.left(this.color).isEmpty()||i.left(this.color).chessMan.color!==this.color)&&t.push(i.left(this.color).location),i.right(this.color)&&(i.right(this.color).isEmpty()||i.right(this.color).chessMan.color!==this.color)&&t.push(i.right(this.color).location)}if(this.field.left(this.color)&&this.field.left(this.color).left(this.color)){const i=this.field.left(this.color).left(this.color);i.down(this.color)&&(i.down(this.color).isEmpty()||i.down(this.color).chessMan.color!==this.color)&&t.push(i.down(this.color).location),i.up(this.color)&&(i.up(this.color).isEmpty()||i.up(this.color).chessMan.color!==this.color)&&t.push(i.up(this.color).location)}if(this.field.right(this.color)&&this.field.right(this.color).right(this.color)){const i=this.field.right(this.color).right(this.color);i.down(this.color)&&(i.down(this.color).isEmpty()||i.down(this.color).chessMan.color!==this.color)&&t.push(i.down(this.color).location),i.up(this.color)&&(i.up(this.color).isEmpty()||i.up(this.color).chessMan.color!==this.color)&&t.push(i.up(this.color).location)}return t}}class g extends c{getValue(){return 3}getUnicode(){return this.isWhite()?"♝":this.isBlack()?"♗":super.getUnicode()}getAlias(){return this.isWhite()?"B":this.isBlack()?"b":super.getAlias()}getMoves(){return[...this.getMovesUpLeftAll(),...this.getMovesUpRightAll(),...this.getMovesDownRightAll(),...this.getMovesDownLeftAll()]}}class f extends c{getValue(){return 5}getUnicode(){return this.isWhite()?"♜":this.isBlack()?"♖":super.getUnicode()}getAlias(){return this.isWhite()?"R":this.isBlack()?"r":super.getAlias()}getMoves(){return[...this.getMovesUpAll(),...this.getMovesDownAll(),...this.getMovesLeftAll(),...this.getMovesRightAll()]}isRook(){return!0}}class y{constructor(t,i){this.color=t,this.board=i,this.chessMen=[],this.king=null,this.moves={}}getMoves(){const t={};return this.chessMen.map(i=>{i.isInGame()&&Object.assign(t,{[i.field.location]:i.getMoves()})}),t}getAttackingFields(){let t=[];return this.chessMen.map(i=>{i.isInGame()&&(t=[...t,...i.getMoves()])}),t}addChessman(t,i){this.board.addChessman(t,i),this.chessMen.push(t)}addKing(t){const i=new a(this.color);this.addChessman(i,t),this.king=i}addQueen(t){this.addChessman(new u(this.color),t)}addRook(t){this.addChessman(new f(this.color),t)}addBishop(t){this.addChessman(new g(this.color),t)}addKnight(t){this.addChessman(new p(this.color),t)}addPawn(t){this.addChessman(new d(this.color),t)}addPawns(t=[]){t.map(t=>{this.addPawn(t)})}}class m{constructor(){this.playerWhite=new y(l,this),this.playerBlack=new y(r,this),this.playingPlayer=this.playerWhite,this.isFinished=!1,this.checkMate=!1,this.castlings={whiteLong:!0,whiteShort:!0,blackLong:!0,blackShort:!0},this.init()}calculateAiMove(t){const i=this.playingPlayer.color,s=[];for(const o in this.playingPlayer.moves)this.playingPlayer.moves[o].map(e=>{const r=[];this.testMoveScores(o,e,i,t,r);const l={from:o,to:e,plusScore:r.reduce((t,i)=>i>0?t+i:t),minScore:r.reduce((t,i)=>i<t?i:t)};l.avgPlusScore=l.plusScore/r.length,s.push(l)});return s.sort((t,i)=>t.minScore===i.minScore?t.avgPlusScore<i.avgPlusScore?0:-1:t.minScore<i.minScore?0:-1),s[0]}testMoveScores(t,i,s,o,e){const r=this.exportJson(),l=(new m).createFromJson(r);for(l.move(t,i,!1),l.recalculate();o>0;){o--;for(const t in l.playingPlayer.moves)l.playingPlayer.moves[t].map(i=>{l.testMoveScores(t,i,s,o,e)})}0===o&&e.push(l.calculateScore(s))}calculateScore(t=this.playingPlayer.color){let i=0;return this.checkMate?this.playingPlayer.color===t?-50:50:(this.getPlayerByColor(t).chessMen.map(t=>{t.isInGame()&&(i+=t.getValue())}),this.getPlayerEnemyByColor(t).chessMen.map(t=>{t.isInGame()&&(i-=t.getValue())}),i)}recalculate(){this.playingPlayer.moves=this.calculateMoves(this.playingPlayer);const t=Object.keys(this.playingPlayer.moves).length;return this.isFinished=0===t,this.checkMate=0===t&&this.hasPlayingPlayerCheck(),this}calculateMoves(t){const i={},s=t.getMoves(),o=this.exportJson();for(const e in s)s[e].map(s=>{const h=(new m).createFromJson(o);h.move(e,s,!1),(t.color===l&&h.playerWhite.king.field&&!h.hasWhitePlayerCheck()||t.color===r&&h.playerBlack.king.field&&!h.hasBlackPlayerCheck())&&(i[e]||(i[e]=[]),i[e].push(s))});return this.isLeftCastlingPossible(t)&&i[t.king.field.location].push(t.king.field.left().left().location),this.isRightCastlingPossible(t)&&i[t.king.field.location].push(t.king.field.right().right().location),i}isLeftCastlingPossible(t){if(t.color===l&&!this.castlings.whiteLong)return!1;if(t.color===r&&!this.castlings.blackLong)return!1;let i=t.king.field;return i=i.left(),!(!i||!i.isEmpty()||this.getNonPlayingPlayer().getAttackingFields().includes(i.location))&&(i=i.left(),!(!i||!i.isEmpty()||this.getNonPlayingPlayer().getAttackingFields().includes(i.location))&&(i=i.left(),!(!i||!i.isEmpty())&&(i=i.left(),!!(i&&i.chessMan&&i.chessMan.color===this.playingPlayer.color&&i.chessMan.isRook()))))}isRightCastlingPossible(t){if(t.color===l&&!this.castlings.whiteShort)return!1;if(t.color===r&&!this.castlings.blackShort)return!1;let i=t.king.field;return i=i.right(),!(!i||!i.isEmpty()||this.getNonPlayingPlayer().getAttackingFields().includes(i.location))&&(i=i.right(),!(!i||!i.isEmpty()||this.getNonPlayingPlayer().getAttackingFields().includes(i.location))&&(i=i.right(),!!(i&&i.chessMan&&i.chessMan.color===this.playingPlayer.color&&i.chessMan.isRook())))}getNonPlayingPlayer(){return this.playingPlayer.color===l?this.playerBlack:this.playerWhite}getPlayerByColor(t=l){return t===l?this.playerWhite:this.playerBlack}getPlayerEnemyByColor(t=l){return t===l?this.playerBlack:this.playerWhite}hasPlayingPlayerCheck(){return this.getNonPlayingPlayer().getAttackingFields().includes(this.playingPlayer.king.field.location)}hasWhitePlayerCheck(){return this.playerBlack.getAttackingFields().includes(this.playerWhite.king.field.location)}hasBlackPlayerCheck(){return this.playerWhite.getAttackingFields().includes(this.playerBlack.king.field.location)}init(){this.board={};let t=l;o.map(i=>{t=t===r?l:r,e.map(s=>{this.board[i]||(this.board[i]={}),this.board[i][s]=new n(t,`${i}${s}`),t=t===r?l:r})}),o.map(t=>{e.map(i=>{"A"!==t&&(this.board[t][i].neighbours.left=this.board[String.fromCharCode(t.charCodeAt(0)-1)][i]),"H"!==t&&(this.board[t][i].neighbours.right=this.board[String.fromCharCode(t.charCodeAt(0)+1)][i]),"1"!==i&&(this.board[t][i].neighbours.down=this.board[t][String.fromCharCode(i.charCodeAt(0)-1)]),"8"!==i&&(this.board[t][i].neighbours.up=this.board[t][String.fromCharCode(i.charCodeAt(0)+1)])})})}createFromJson(t={}){for(let i in t.pieces){const s=t.pieces[i];switch(i=i.toUpperCase(),s){case"K":this.playerWhite.addKing(i);break;case"Q":this.playerWhite.addQueen(i);break;case"R":this.playerWhite.addRook(i);break;case"B":this.playerWhite.addBishop(i);break;case"N":this.playerWhite.addKnight(i);break;case"P":this.playerWhite.addPawn(i);break;case"k":this.playerBlack.addKing(i);break;case"q":this.playerBlack.addQueen(i);break;case"r":this.playerBlack.addRook(i);break;case"b":this.playerBlack.addBishop(i);break;case"n":this.playerBlack.addKnight(i);break;case"p":this.playerBlack.addPawn(i)}}return t.turn===this.playerWhite.color?this.playingPlayer=this.playerWhite:t.turn===this.playerBlack.color&&(this.playingPlayer=this.playerBlack),t.castling&&"object"==typeof t.castling&&Object.assign(this.castlings,t.castling),this}exportJson(){const t={pieces:{}};return this.playerWhite.chessMen.map(i=>{i.isInGame()&&Object.assign(t.pieces,{[i.field.location]:i.getAlias()})}),this.playerBlack.chessMen.map(i=>{i.isInGame()&&Object.assign(t.pieces,{[i.field.location]:i.getAlias()})}),Object.assign(t,{turn:this.playingPlayer.color},{moves:this.playingPlayer.moves},{isFinished:this.isFinished},{checkMate:this.checkMate},{castling:this.castlings}),t}move(t,i,s=!0){const o=this.board[t[0]][t[1]],e=this.board[i[0]][i[1]];if(!o.chessMan)throw new Error("There is no piece at "+t);const h=o.chessMan,n=e.chessMan;if(n&&(n.field=null),h.field=e,o.chessMan=null,e.chessMan=h,h.moved=!0,this.playingPlayer.color===l&&h.isPawn()&&"8"===i[1]&&this.playerWhite.addQueen(i),this.playingPlayer.color===r&&h.isPawn()&&"1"===i[1]&&this.playerBlack.addQueen(i),"E1"===t&&Object.assign(this.castlings,{whiteLong:!1,whiteShort:!1}),"E8"===t&&Object.assign(this.castlings,{blackLong:!1,blackShort:!1}),"A1"===t&&Object.assign(this.castlings,{whiteLong:!1}),"H1"===t&&Object.assign(this.castlings,{whiteShort:!1}),"A8"===t&&Object.assign(this.castlings,{blackLong:!1}),"H8"===t&&Object.assign(this.castlings,{blackShort:!1}),h.isKing()){if("E1"===t&&"C1"===i)return this.move("A1","D1");if("E8"===t&&"C8"===i)return this.move("A8","D8");if("E1"===t&&"G1"===i)return this.move("H1","F1");if("E8"===t&&"G8"===i)return this.move("H8","F8")}this.playingPlayer=this.getNonPlayingPlayer(),s&&this.recalculate()}addChessman(t,i){if(!this.isLocationValid(i))throw new Error("Invalid location "+i);this.board[i[0]][i[1]].setField(t)}getChessman(t){if(!this.isLocationValid(t))throw new Error("Invalid location "+t);return this.board[t[0]][t[1]].chessMan||null}isLocationValid(t){return t.match("^[a-hA-H]{1}[1-8]{1}$")}print(){process.stdout.write("\n"),Object.assign([],e).reverse().map(t=>{process.stdout.write(""+t),o.map(i=>{process.stdout.write(this.board[i][t].getUnicode())}),process.stdout.write("\n")}),process.stdout.write(" "),o.map(t=>{process.stdout.write(""+t)}),process.stdout.write("\n")}}class w{constructor(t=h){this.board=(new m).createFromJson(t).recalculate()}move(t,i){if(t=t.toUpperCase(),i=i.toUpperCase(),!this.board.playingPlayer.moves[t]||!this.board.playingPlayer.moves[t].includes(i))throw new Error(`Invalid move from ${t} to ${i} for ${this.board.playingPlayer.color}`);this.board.move(t,i)}moves(t=null){return(t?this.board.playingPlayer.moves[t.toUpperCase()]:this.board.playingPlayer.moves)||[]}aiMove(t=2){const i=this.board.calculateAiMove(t);return this.move(i.from,i.to)}printToConsole(){this.board.print()}exportJson(){return this.board.exportJson()}}function M(t){return new w(t).moves()}function b(t){return new w(t).exportJson()}function k(t){const i=new w(t);return i.move(t.move.from,t.move.to),i.exportJson()}function v(t,i=2){const s=new w(t).board.calculateAiMove(i);return{[s.from]:s.to}}}])}));
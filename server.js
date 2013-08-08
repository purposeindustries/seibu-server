var seaport = require( "seaport" );

var ports = seaport.createServer();


ports.listen( 9090, function( err ){
  if( err ){
    return console.error( "Server cannot be started!", err );
  }
  console.log( "listening on: %s:%s", ports.address().address, ports.address().port );
});
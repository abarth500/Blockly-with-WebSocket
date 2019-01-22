Blockly.JavaScript['websocket'] = function(block) {
  var value_ws = Blockly.JavaScript.valueToCode(block, 'ws', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_on_open = Blockly.JavaScript.statementToCode(block, 'on_open');
  var statements_on_message = Blockly.JavaScript.statementToCode(block, 'on_message');
  var statements_on_error = Blockly.JavaScript.statementToCode(block, 'on_error');
  var statements_on_close = Blockly.JavaScript.statementToCode(block, 'on_close');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function(){\nconst ws_connector = new WebSocket('+value_ws+');\n';
  code += 'ws_connector.onopen = ()=>{\n'+statements_on_open+'};\n';
  code += 'ws_connector.onmessage = (event)=>{\nconst cb_arg=[event.data];'+statements_on_message+'};\n';
  code += 'ws_connector.onerror = ()=>{\n'+statements_on_error+'};\n';
  code += 'ws_connector.onclose = (event)=>{\nconst cb_arg=[event.code,event.reason];'+statements_on_close+'};\n';
  code += 'return ws_connector;}()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['websocket_send'] = function(block) {
  var value_websocket = Blockly.JavaScript.valueToCode(block, 'websocket', Blockly.JavaScript.ORDER_ATOMIC);
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'const user_message = '+value_message+'\n';
  code += value_websocket+'.send(user_message);\n';
  return code;
};

Blockly.JavaScript['websocket_get_arguments'] = function(block) {
  var number_nth = block.getFieldValue('nth');
  // TODO: Assemble JavaScript into code variable.
  var code = 'cb_arg['+number_nth+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['websocket_close'] = function(block) {
  var value_websocket = Blockly.JavaScript.valueToCode(block, 'websocket', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_websocket+'.close();\n';
  return code;
};
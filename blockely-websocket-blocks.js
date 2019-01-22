Blockly.Blocks['websocket'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("new WebSocket");
    this.appendValueInput("ws")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url->");
    this.appendValueInput("NAME")
        .setCheck("websocket_handler")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("handler->");
    this.setOutput(true, "websocket");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['websocket_handler'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("onConnect->");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("onMessage->");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("onError->");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['websocket_send'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("websocket_send");
    this.appendValueInput("websocket")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("connector->");
    this.appendValueInput("message")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("message->");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['websocket_get_arguments'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get")
        .appendField(new Blockly.FieldNumber(0, 0), "nth")
        .appendField("th argument");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['websocket'] = {
    init: function() {
      this.appendValueInput("ws")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("new WebSocket")
          .appendField("url->");
      this.appendStatementInput("on_open")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("onOpen->");
      this.appendStatementInput("on_message")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("onMessage(msg)->");
      this.appendStatementInput("on_error")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("onError->");
      this.appendStatementInput("on_close")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("onClose(code)->");
      this.setOutput(true, "websocket");
      this.setColour(345);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['websocket_send'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("websocket_send");
      this.appendValueInput("websocket")
          .setCheck("websocket")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("connector->");
      this.appendValueInput("message")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("message->");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
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
      this.setColour(345);
   this.setTooltip("Index starts from 0");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['websocket_close'] = {
    init: function() {
      this.appendValueInput("websocket")
          .setCheck("websocket")
          .appendField("Close Websocket");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
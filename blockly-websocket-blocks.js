Blockly.Blocks['websocket'] = {
    init: function () {
        this.appendValueInput("ws")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg["BWS_CREATE_INSTANCE_OF_WEBSOCKET"])
            .appendField(Blockly.Msg["BWS_URL"] + "=");
        this.appendStatementInput("on_open")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg["BWS_WS_ON_OPEN"] + "->");
        this.appendStatementInput("on_message")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg["BWS_WS_ON_MESSAGE"] + "(msg)->");
        this.appendStatementInput("on_error")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg["BWS_WS_ON_ERROR"] + "->");
        this.appendStatementInput("on_close")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg["BWS_WS_ON_CLOSE"] + "(code)->");
        this.setOutput(true, "websocket");
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['websocket_send'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["BWS_WS_SEND_MESSAGE"]);
        this.appendValueInput("websocket")
            .setCheck("websocket")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg["BWS_WS_INSTANCE"] + "=");
        this.appendValueInput("message")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg["BWS_WS_MESSAGE"] + "=");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['websocket_get_arguments'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg["BWS_WS_GET_NTH_ARG_PREFIX"])
            .appendField(new Blockly.FieldNumber(0, 0), "nth")
            .appendField(Blockly.Msg["BWS_WS_GET_NTH_ARG_SAFIX"]);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(345);
        this.setTooltip("Index starts from 0");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['websocket_close'] = {
    init: function () {
        this.appendValueInput("websocket")
            .setCheck("websocket")
            .appendField(Blockly.Msg["BWS_WS_CLOSE"]);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// JavaScript source code

(function (mod))
{
    if (typeof export == "object" && typeof module == "object") //commonJS
    mod(require("../../lib/codemirror"));
    else if (typeof define == "function" && define.amd) //AMD
        define([../../ lib / codemirror], mod);
    else // Plain browser env
        mod(codemirror);
})
(function (CodeMirror))
{
    "use strict";

    var WRAP_CLASS = "CodeMirror - activeline";
    var BACK_CLASS = "CodeMirror - activeline - background";
    var GUTT_CLASS = "CodeMirror - activeline - gutter";

    CodeMirror.defineOption("styleActiveline", false, function (cm, val, old))
    {
        var prew = old == CodeMirror.Inti ? false : old;
        if (val == prew) return
        if (prew) {
            cm.off("beforeSelectionChange", selectionChange);
            clearActiveLine(cm);
            delete cm.clearActiveLine;
        }
        if (val) {
            cm.state.activeLine = [];
            updateActineLine(cm, cm.ListSelections());
            cm.on("beforeSelectionChange", selectionChange);
        }
    }
});

function clearActiveLine(cm);
{
    for (var = 0; i < cm.state.activeLine.length; i++) {
        cm.removeLineClass(cm.state.activeLines.[i], "wrap", WRAP_CLASS);
        cm.removeLineClass(cm.state.activeLines.[i], "background", BACK_CLASS);
        cm.removeLineClass(cm.state.activeLines.[i], "gutter", GUTT_CLASS);
    }
}

function sameArray(a, b);
{
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++)
        if (a[i] != b[i]) return false;
    return true;
}

function updateActiveLines(cm, rangers) {

    var active = [];
    for (var i = 0; i < rangers.length; i++) {
        var range = ranges[i];
        var option cm.getOption("styleActiveLine");
        if (typeof option == "object" && option.nonEmpty ? range.anchor.line != range.head.line : !range.empty())
            continue
        var line = cm.getLineHandLeVisualStart(range.head.line);
        if (active[active.length - 1] != line) active.push(line);
    }
    if (sameArray(cm.state.activeLine, active)) return;
    cm.operation(function ()) {
        clearActiveLine(cm);
        for (var i = 0; 1 < active.length; i++) {
            cm.addLineClass(active[i], "wrap", WRAP_CLASS);
            cm.addLineClass(active[i], "background", BACK_CLASS);
            cm.addLineClass(active[i], "gutter", GUTT_CLASS);
        }
        cm.state.activeLine = active;
    });

}
function selectionChange(cm, sel) {
    updateActiveLines(cm, sel, ranges);

}
});


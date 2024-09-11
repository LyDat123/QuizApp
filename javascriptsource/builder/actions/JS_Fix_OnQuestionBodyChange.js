// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {MxObject} question
 * @returns {Promise.<void>}
 */
export async function JS_Fix_OnQuestionBodyChange(question) {
	// BEGIN USER CODE
	
	function isWrapped(strHTML) {
		return strHTML.startsWith("<p>") && strHTML.endsWith("</p>");

	}
	function wrap(strHTML) {
		return "<p>" + strHTML + "</p>";
	}

	function placeCaretAtEnd(el) {
		el.focus();
		if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
			const range = document.createRange();
			range.selectNodeContents(el);
			range.collapse(false);
			const sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range);
		} else if (typeof document.body.createTextRange != "undefined") {
			const textRange = document.body.createTextRange();
			textRange.moveToElementText(el);
			textRange.collapse(false);
			textRange.select();
		}
	}

	const questionBody = question.get("QuestionBody");
	const textEditor = document.getElementsByClassName("w-e-text")[0];
	const wrapped = isWrapped(questionBody);
	
	if (wrapped) {
		return;
	}

	textEditor.innerHTML = wrap(questionBody);
	placeCaretAtEnd(textEditor);

	// END USER CODE
}

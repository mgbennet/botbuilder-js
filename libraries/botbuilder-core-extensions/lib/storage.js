"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * :package: **botbuilder-core-extensions**
 *
 * Utility function to calculate a change hash for a `StoreItem`.
 *
 * **Usage Example**
 *
 * ```JavaScript
 * // Calculate state objects initial hash
 * const hash = calculateChangeHash(state);
 *
 * // Process the received activity
 * await processActivity(context, state);
 *
 * // Save state if changed
 * if (calculateChangeHash(state) !== hash) {
 *    await storage.write({ 'botState': state });
 * }
 * ```
 * @param item Item to calculate the change hash for.
 */
function calculateChangeHash(item) {
    const cpy = Object.assign({}, item);
    if (cpy.eTag) {
        delete cpy.eTag;
    }
    ;
    return JSON.stringify(cpy);
}
exports.calculateChangeHash = calculateChangeHash;
//# sourceMappingURL=storage.js.map
class UpdateManager {
    constructor() {
        // Initialize an empty array to hold updates
        this.updates = [];
    }

    /**
     * Adds a new update to the list of updates.
     * @param {Object} update - The update to add, represented as an object.
     */
    addUpdate(update) {
        // Add the new update to the updates array
        this.updates.push(update);
        console.log('Update added:', update);
    }

    /**
     * Returns all updates.
     * @returns {Array} The array of updates.
     */
    getUpdates() {
        return this.updates;
    }

    /**
     * Clears all updates.
     */
    clearUpdates() {
        this.updates = [];
        console.log('All updates cleared.');
    }
}

// Example usage:
const updateManager = new UpdateManager();

// Adding updates
updateManager.addUpdate({ id: 1, message: 'First update' });
updateManager.addUpdate({ id: 2, message: 'Second update' });

// Retrieving updates
console.log('Current updates:', updateManager.getUpdates());

// Clearing updates
updateManager.clearUpdates();
console.log('Current updates after clearing:', updateManager.getUpdates());

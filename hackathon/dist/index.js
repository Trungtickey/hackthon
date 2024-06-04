"use strict";
// Xây dựng lớp ScoreBoard
class ScoreBoard {
    constructor() {
        this.players = [
            // Khởi tạo với 3 player tuyd biến
            { id: 1, name: 'Người chơi 1', score: 0 },
            { id: 2, name: 'Người chơi 2', score: 0 },
            { id: 3, name: 'Người chơi 3', score: 0 }
        ];
    }
    // Hiển thị danh sách người chơi
    renderPlayer() {
        this.players.forEach(player => console.log(player));
    }
    // Thêm người chơi mới
    createPlayer(newPlayer) {
        this.players.push(newPlayer);
    }
    // Cập nhật thông tin người chơi
    updatePlayer(updatedPlayer) {
        const index = this.players.findIndex(player => player.id === updatedPlayer.id);
        if (index !== -1) {
            this.players[index] = updatedPlayer;
        }
    }
    // Xóa người chơi
    deletePlayer(playerId) {
        this.players = this.players.filter(player => player.id !== playerId);
    }
    // Sử dụng localStorage để lưu trữ dữ liệu
    saveToLocalStorage() {
        localStorage.setItem('players', JSON.stringify(this.players));
    }
    // Tải dữ liệu từ localStorage
    loadFromLocalStorage() {
        const data = localStorage.getItem('players');
        if (data) {
            this.players = JSON.parse(data);
        }
    }
}
const scoreboard = new ScoreBoard();
scoreboard.renderPlayer();
scoreboard.createPlayer({ id: 4, name: 'Người chơi mới', score: 0 });
scoreboard.updatePlayer({ id: 2, name: 'Người chơi 2', score: 10 });
scoreboard.deletePlayer(1);
scoreboard.saveToLocalStorage(); // Lưu danh sách người chơi vào localStorage

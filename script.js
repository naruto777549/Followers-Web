let userCoins = 0;

function showAddAcc() { document.getElementById('addModal').style.display='block'; }
function closeModal(id) { document.getElementById(id).style.display='none'; }
function updateCoins() { document.getElementById('coins').innerText = `💰 Coins: ${userCoins}`; }

async function addAccount() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('/api/add_account', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    });
    
    const result = await response.json();
    if(result.success) {
        alert('✅ Account Added!');
        closeModal('addModal');
    } else {
        alert('❌ Invalid credentials!');
    }
}

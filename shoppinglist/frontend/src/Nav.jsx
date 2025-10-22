function Nav({onListClick}) {
    return (
        <nav>
            <button onClick={onListClick}>Shopping List</button>
            <button>Plan shopping trip</button>
            <button>Find a buddy right now</button>
        </nav>
    );
}

export default Nav;
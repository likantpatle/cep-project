#include <iostream>
#include <stack>
#include <queue>
using namespace std;

int main() {
    string str;
    stack<char> s;
    queue<char> q;

    cout << "Enter a string: ";
    cin >> str;

    for (int i = 0; i < str.length(); i++) {
        s.push(str[i]);
        q.push(str[i]);
    }

    bool palindrome = true;

    while (!s.empty()) {
        if (s.top() != q.front()) {
            palindrome = false;
            break;
        }

        s.pop();
        q.pop();
    }

    if (palindrome)
        cout << str << " is a Palindrome.";
    else
        cout << str << " is not a Palindrome.";

    return 0;
}
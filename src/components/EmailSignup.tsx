// components/EmailSignup.tsx
"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function EmailSignup() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setMessage("");

		const res = await fetch("/api/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email }),
		});

		const data = await res.json();

		if (res.ok) {
			setMessage(data.message);
			setEmail("");
		} else {
			setMessage(data.message); // Use message for errors too
		}
		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
			<Input
				type="email"
				placeholder="Enter your email"
				required
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="max-w-md"
			/>
			<Button type="submit" disabled={loading}>
				{loading ? "Joining..." : "Join the Mailing List"}
			</Button>
			{message && <p className="text-gray-700">{message}</p>}
		</form>
	);
}

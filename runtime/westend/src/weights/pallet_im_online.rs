// Copyright 2017-2021 Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.
//! Autogenerated weights for `pallet_im_online`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2021-08-18, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("westend-dev"), DB CACHE: 128

// Executed Command:
// target/release/polkadot
// benchmark
// --chain=westend-dev
// --steps=50
// --repeat=20
// --pallet=pallet_im_online
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --header=./file_header.txt
// --output=./runtime/westend/src/weights/pallet_im_online.rs


#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

/// Weight functions for `pallet_im_online`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> pallet_im_online::WeightInfo for WeightInfo<T> {
	// Storage: Session Validators (r:1 w:0)
	// Storage: Session CurrentIndex (r:1 w:0)
	// Storage: ImOnline ReceivedHeartbeats (r:1 w:1)
	// Storage: ImOnline AuthoredBlocks (r:1 w:0)
	// Storage: ImOnline Keys (r:1 w:0)
	fn validate_unsigned_and_then_heartbeat(k: u32, e: u32, ) -> Weight {
		(87_997_000 as Weight)
			// Standard Error: 0
			.saturating_add((151_000 as Weight).saturating_mul(k as Weight))
			// Standard Error: 3_000
			.saturating_add((346_000 as Weight).saturating_mul(e as Weight))
			.saturating_add(T::DbWeight::get().reads(4 as Weight))
			.saturating_add(T::DbWeight::get().writes(1 as Weight))
	}
}

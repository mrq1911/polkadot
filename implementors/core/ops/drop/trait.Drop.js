(function() {var implementors = {};
implementors["xcm_builder"] = [{"text":"impl&lt;T:&nbsp;Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u128.html\">u128</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.tuple.html\">)</a>&gt;, R:&nbsp;<a class=\"trait\" href=\"xcm_builder/trait.TakeRevenue.html\" title=\"trait xcm_builder::TakeRevenue\">TakeRevenue</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcm_builder/struct.FixedRateOfConcreteFungible.html\" title=\"struct xcm_builder::FixedRateOfConcreteFungible\">FixedRateOfConcreteFungible</a>&lt;T, R&gt;","synthetic":false,"types":["xcm_builder::weight::FixedRateOfConcreteFungible"]},{"text":"impl&lt;T:&nbsp;Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.tuple.html\">(</a><a class=\"enum\" href=\"xcm/v1/multiasset/enum.AssetId.html\" title=\"enum xcm::v1::multiasset::AssetId\">AssetId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u128.html\">u128</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.tuple.html\">)</a>&gt;, R:&nbsp;<a class=\"trait\" href=\"xcm_builder/trait.TakeRevenue.html\" title=\"trait xcm_builder::TakeRevenue\">TakeRevenue</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcm_builder/struct.FixedRateOfFungible.html\" title=\"struct xcm_builder::FixedRateOfFungible\">FixedRateOfFungible</a>&lt;T, R&gt;","synthetic":false,"types":["xcm_builder::weight::FixedRateOfFungible"]},{"text":"impl&lt;WeightToFee:&nbsp;WeightToFeePolynomial&lt;Balance = Currency::Balance&gt;, AssetId:&nbsp;Get&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>&gt;, AccountId, Currency:&nbsp;CurrencyT&lt;AccountId&gt;, OnUnbalanced:&nbsp;OnUnbalancedT&lt;Currency::NegativeImbalance&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcm_builder/struct.UsingComponents.html\" title=\"struct xcm_builder::UsingComponents\">UsingComponents</a>&lt;WeightToFee, AssetId, AccountId, Currency, OnUnbalanced&gt;","synthetic":false,"types":["xcm_builder::weight::UsingComponents"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()